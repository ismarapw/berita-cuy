<template>
  <Navbar />
  <router-view/>
</template>


<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: 'HomeView',
  components : {
    Navbar
  }
}
</script>
<style>

</style>
