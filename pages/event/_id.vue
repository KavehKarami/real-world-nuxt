<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $api, params, error }) {
    try {
      const { data: event } = await $api.get('/events/' + params.id)

      return { event }
    } catch (e) {
      error({ statusCode: 503, message: 'Unable to fetch event #' + params.id })
    }
  },
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'what do you need to know about ' + this.event.title,
        },
      ],
    }
  },
}
</script>
