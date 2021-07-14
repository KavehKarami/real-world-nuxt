<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) of events"
      :key="index"
      :data-index="index"
      :event="event"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head: () => ({
    title: 'Event Listing',
  }),

  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
}
</script>
