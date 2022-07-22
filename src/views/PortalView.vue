<template>
    <div class="portal-view">
        <header>
            <h1>{{portal}}</h1>
            <hr class = "underline-text">
        </header>
        <Category v-bind:portal="portal" />
    </div>
</template>

<script>

import Category from '../components/Category.vue'

export default {
    name: 'HomeView',

    props : ['portal'],

    components : {
        Category
    },


}
</script>

<style>
    header h1 {
        font-size: 24px;
    }

</style>