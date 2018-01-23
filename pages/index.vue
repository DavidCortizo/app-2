<template>
  <section class="container">
    <h2 class="title">Search in Space!</h2>
    <form v-on:submit.prevent="submit(query)">
      <label class="subtitle">Type in what you are looking for:</label>
      <input type="text" placeholder="sun" v-model="query" autofocus>
      <i @click="submit(query)" class="material-icons search">search</i>
    </form>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {

  },
  data () {
    return {
      query: ''
      // imgData: ''
    }
  },
  methods: {
    submit (query) {
      // axios.get('https://images-api.nasa.gov/search?q=' + query + ' &media_type=image')
      //   .then(response => {
      //     this.imgData = response.data.collection.items
      //   })
      //   .catch(e => {
      //     console.log(e)
      //   })
      this.$router.push(`results/${this.query}`)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
