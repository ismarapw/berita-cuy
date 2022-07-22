<template>
    <div class="portal-view">
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