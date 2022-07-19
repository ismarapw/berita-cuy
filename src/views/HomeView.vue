<template>
  <div class="home">
    <Banner />
    <Headline />
  </div>
</template>

<script>

import Banner from "../components/Banner.vue"
import Headline from "../components/Headline.vue"

export default {
  name: 'HomeView',
  components : {
    Banner, Headline
  }

}
</script>

<style>
  .home {
      width: 80%;
      margin: auto;
  }

  @media screen and (max-width: 900px) {
    .home {
      width: 96%; 
    }
  }
</style>
