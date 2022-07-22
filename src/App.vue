<template>
  <div class="fit">
    <Navbar />
    <router-view/>
  </div>
  <Footer />
</template>


<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'HomeView',
  components : {
    Navbar, Footer
  }
}
</script>
<style>

@media screen and (min-width:1920px){
    #app .fit {
        width: 1920px;
        margin: auto;
    }
}
</style>
