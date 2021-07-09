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
  asyncData({ $api, error }) {
    return $api
      .get(`/events`)
      .then((response) => {
        return {
          events: response.data,
        }
      })
      .catch(() =>
        error({
          statusCode: 503,
          message: 'Unable to fetch events at this time, please try again',
        })
      )
  },
  head: () => ({
    title: 'Event Listing',
  }),
}
</script>
