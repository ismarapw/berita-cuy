<template>
    <div v-if="categories === null">
        <div>Loading</div>    
    </div>

    <div v-else-if="categories === 'Portal tidak ditemukan'">
        <div class="flex justify-content-center">
            <img src="../assets/img/not-found.svg" alt="" class="error-img">
        </div>
        <h2 class="error-msg">{{categories}}</h2>
    </div>

    <div v-else>
        <header>
            <h1>{{portal}}</h1>
            <hr class = "underline-text">
        </header>
        <div class="category flex" v-dragscroll>
            <div v-for="(category,idx) in categories" v-bind:key = "category" class="toggle-category">
                <input v-bind:id = "idx" type="radio" name="category" v-bind:checked = "idx === 0" v-on:click = "updateCurrentCategory(category)" />
                <label v-bind:for= "idx">{{category}}</label>
            </div>
        </div>
        <CategoryListNews v-bind:portalCategory= "{portal : portal, category : currentCategory}" />
    </div>

</template>

<script>
import CategoryListNews from "./CategoryListNews.vue";
import axios from 'axios'

export default {
    props : ['portal'],

    data(){
        return {
            categories : null,
            currentCategory : null,
        }
    },

    components : {
        CategoryListNews
    },

    methods : {
        requestCategories(portalName){
            // request kategori berita dari portal
            axios.get("https://api-berita-indonesia.vercel.app/")
            .then((response) => {        

                // ambil daftar portal
                const portalList = response.data.endpoints;

                // ambil suatu portal tertentu yang sesuai dengan paramater
                const portal = portalList.filter((portalItem) => {if(portalItem.name == portalName) return portalItem})[0]; 

                // mapping semua category dari suatu portal jika portal sesuai dengan paramater
                this.categories = portal !== undefined ? portal.paths.map((item) => {return item.name}) : "Portal tidak ditemukan";

                // update current category jika portal ada
                if(this.categories !== "Portal tidak ditemukan") this.currentCategory = this.categories[0];

            })
            .catch((error) => {
                console.log(error);
            });
        },

        updateCurrentCategory(category){
            this.currentCategory = category;
        }
    },

    watch: {
        portal: function () {
            this.requestCategories(this.portal);
        }
    },

    mounted(){
        this.requestCategories(this.portal);
    }

}
</script>

<style>
    .category {
        overflow: auto;
    }

    .category::-webkit-scrollbar{
        display: none;
    }

    .toggle-category:not(:nth-child(1)){
        margin-left: 20px;
    }

    input {
        display: none;
    }

    .error-img {
        width: 50%;
    }

    label {
        display: inline-block;
        color: #393939;
        background-color: transparent;
        border : 1px solid #393939;
        padding: 8px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    input:checked + label {
        color: #fff;
        background-color: #F45800;
        border: none;
    }

    input:not(:checked) + label {
        color: #393939;
        background-color: transparent;
        border : 1px solid #393939;
    }


</style>