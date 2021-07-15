import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/KavehKarami/real-world-nuxt',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
})

function getEvents() {
  return apiClient.get('/events')
}

function getEvent(id) {
  return apiClient.get('/events/' + id)
}

export default {
  getEvents,
  getEvent,
}
