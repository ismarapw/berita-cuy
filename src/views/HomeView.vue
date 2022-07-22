<template>
  <div class="home-view">
    <Banner v-bind:newsPortal = "newsPortal" />
    <Headline v-bind:newsPortal = "newsPortal" />
  </div>
</template>

<script>

import Banner from "../components/Banner.vue"
import Headline from "../components/Headline.vue"

export default {
  name: 'HomeView',

  data(){
    return {
      newsPortal : ['tribun', 'cnn','cnbc', 'okezone','sindonews']
    }
  },

  components : {
    Banner, Headline
  }
}
</script>

<style>

</style>
