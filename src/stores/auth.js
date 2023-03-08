import { defineStore } from 'pinia'
import axios from 'axios'
import CryptoJS  from 'crypto-js'
import router from '@/router'
import { mongoUrl } from '@/stores/url'


export const auth = defineStore({
    id: 'auth',
    state: () => ({
        auth: false,
        user: {},
        passPhrase: '|}CSwIIfYd',
        err: ''
    }),
    actions: {
        checkAuth () {
            const localData = localStorage.getItem('auth')
            if (localData) {
                this.auth = true
                const decr = CryptoJS.AES.decrypt(localData, this.passPhrase).toString(CryptoJS.enc.Utf8)
                this.user = JSON.parse(decr)
            }
        },
        sendAuth (user, password) {
            axios.post(`${mongoUrl}/auth`, {
                user, password
            })
                .then(res => {
                    this.auth = res.data.auth
                    if (this.auth) {
                        this.user = res.data.user
                        const encrypt = CryptoJS.AES.encrypt(JSON.stringify(this.user), this.passPhrase).toString()
                        localStorage.setItem('auth', encrypt)
                        router.push('/')
                    } else {
                        this.err = 'Неверный пользователь/пароль'
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        },
        deleteAuth () {
            localStorage.removeItem('auth')
            this.auth = false
            this.user = {}
            router.push('/auth')
        }
    }
})