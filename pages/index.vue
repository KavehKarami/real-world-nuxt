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
export default {
  async asyncData({ $api, error }) {
    try {
      const { data: events } = await $api.get(`/events`)

      return {
        events,
      }
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
}
</script>
