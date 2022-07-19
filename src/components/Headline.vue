<template>
    <div class="headline">
        <div class="portal-headline">
            <div class="portal">
                <h1>Terbaru di Antara</h1>
                <hr class="underline-text flex align-items-start">
            </div>
            <div class="grid">
                <HeadlineCardNews v-for="item in 6" v-bind:key = "item" /> 
            </div>
            <div class="portal">
                <h1>Terbaru di CNN</h1>
                <hr class="underline-text flex align-items-start">
            </div>
            <div class="grid">
                <HeadlineCardNews v-for="item in 6" v-bind:key = "item" />
            </div>
            <div class="portal">
                <h1>Terbaru di Okezone</h1>
                <hr class="underline-text flex align-items-start">
            </div>
            <div class="grid">
                <HeadlineCardNews v-for="item in 6" v-bind:key = "item" />  
            </div>
            <div class="portal">
                <h1>Terbaru di CNBC</h1>
                <hr class="underline-text flex align-items-start">
            </div>
            <div class="grid">
                <HeadlineCardNews v-for="item in 6" v-bind:key = "item" /> 
            </div>
            <div class="portal">
                <h1>Terbaru di Sindonews</h1>
                <hr class="underline-text flex align-items-start">
            </div>
            <div class="grid">
                <HeadlineCardNews v-for="item in 6" v-bind:key = "item" />  
            </div>
        </div>
    </div>
</template>

<script>
import HeadlineCardNews from "./HeadlineCardNews.vue";

export default {
    components : {
        HeadlineCardNews
    },

    data(){
        // temporari loop counter
        return {
            item : 1
        }
    }
}
</script>

<style>
    .headline {
        margin-top: 10rem ;
    }

    .portal {
        margin-top: 50px;
    }


    .portal-headline h1 {
        font-size: 24px;
    }

    .news-img img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 5px;
    }

    .headline-title {
        font-size : 16px
    }

    .content-news {
        margin-left: 10px;
    }

    .headline-title {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

    .content-news p {
        margin-top: 3px;
    }

</style>