<template>
  <nav class="flex justify-content-between">
    <div>
      <h1 class="brand">Berita<span class="text-orange">Cuy!</span></h1>
    </div>

    <div class="nav-items flex align-items-center" v-bind:class="{show : transformNav}">
      <div class="nav-item">
        <router-link v-bind:to = "{name : 'home'}" class="router">Home</router-link>
      </div>
      <div class="nav-item">
        <router-link v-bind:to = "{name : 'antara'}" class="router">Antara</router-link>
      </div>
      <div class="nav-item">
        <router-link v-bind:to = "{name : 'cnn'}" class="router">CNN</router-link>
      </div>
      <div class="nav-item">
        <router-link v-bind:to = "{name : 'okezone'}" class="router">Okezone</router-link>
      </div>
      <div class="nav-item">
        <router-link v-bind:to = "{name : 'cnbc'}" class="router">CNBC</router-link>
      </div>
      <div class="nav-item">
        <router-link v-bind:to = "{name : 'sindonews'}" class="router">Sindonews</router-link>
      </div>
      <div class="nav-item">
        <router-link v-bind:to = "{name : 'about'}" class="router">About</router-link>
      </div>
    </div>

    <div class="toggle-nav" v-on:click= "toggleNavbar">
      <i v-if="!transformNav" class="ri-menu-3-line"></i>
      <i v-else class="ri-close-line"></i>
    </div>
  </nav>
</template>

<script>
export default {

  data(){
    return {
      transformNav : false
    }
  },

  methods : {
    toggleNavbar(){
      this.transformNav = !this.transformNav;
    }
  }


}
</script>

<style>
  nav {
    width: 80%;
    margin: 1.25rem auto;
  }

  .toggle-nav {
    display: none;
  }

  .brand {
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 30px;
  }

  .nav-item {
    margin-left : 15px;
    cursor: pointer;
  }

  .nav-items {
    opacity: 1;
  }


  .router {
    text-decoration: none;
    color: rgb(26, 26, 26);
  }

  .router-link-active{
    background-color: #F45800;
    padding: 5px 15px;
    border-radius : 10px;
    color: white;
    font-weight: 500;
  }


  @media screen and (max-width:900px) {
    nav{
      width: 95%;
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      margin-top : 1rem auto;
    }

    .nav-items {
      transform: translateX(100%);
      opacity: 0;
      position: absolute;
      z-index: 2;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgb(255, 255, 255);
      flex-direction: column;
      padding: 20px 0;
      transition: ease-in-out all 0.5s;
    }

    .nav-item {
      margin: 40px 0 0 0;
    }

    .show {
      transition: ease-in-out all 0.5s;
      transform: translateX(0);
      opacity: 1;
    }

    .toggle-nav {
      display: inherit;
      cursor: pointer;
    }

    .toggle-nav i {
      font-size: 28px;
      position: relative;
      z-index: 3;
    }
  }


</style>