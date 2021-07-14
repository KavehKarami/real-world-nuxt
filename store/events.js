import EventService from '@/services/EventService.js'

export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}

export const actions = {
  async fetchEvents({ commit }) {
    try {
      const { data: events } = await EventService.getEvents()

      commit('SET_EVENTS', events)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },

  async fetchEvent({ commit }, id) {
    try {
      const { data: event } = await EventService.getEvent(id)

      commit('SET_EVENT', event)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
}
