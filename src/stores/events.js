import { defineStore } from 'pinia'
import axios from 'axios'
import { mongoUrl } from '@/stores/url'
import router from '@/router'


export const events = defineStore({
    id: 'events',
    state: () => ({
        eventsData: null,
        deletionId: ''
    }),
    actions: {
        async getEvents () {
            const response = await axios.get(`${mongoUrl}/getEvents`)
            this.eventsData = response.data
        },
        async deleteEvent () {
            const response = await axios.delete(`${mongoUrl}/deleteEvent`, {
                params: {
                    id: this.deletionId
                }
            })
            this.eventsData = response.data
            this.deletionId = ''
        },
        async closeEvent (event) {
            const response = await axios.post(`${mongoUrl}/closeEvent`, null,{
                params: {
                    id: event.id,
                    status: event.status
                }
            })
            this.eventsData = response.data
        },
        async addEvent (props) {
            const name = props.target.user.value
            const address = props.target.address.value
            const comment = props.target.comment.value
            const date = Math.floor(new Date().getTime()/1000.0)
            const responce = await axios.post(`${mongoUrl}/addEvent`, {
                name,
                address,
                comment,
                date
            })
            if (responce.data.ok === 'ok') {
                router.push('/')
            }
        }
    }
})