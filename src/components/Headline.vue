<template>
    <div class="headline">
        <div class="portal-headline" v-for="portal in newsPortal" v-bind:key="portal">
            <div class="portal flex justify-content-between">
                <div>
                    <h1>Terbaru di {{portal}}</h1>
                    <hr class="underline-text flex align-items-start">
                </div>
                <div>
                    <router-link class="router-latest" v-bind:to= "{name : 'portal', params : {portal: portal}}">Lihat semua <i class="ri-arrow-right-s-line"></i></router-link >
                </div>
            </div>
            <div class="grid">
                <div v-for="(_,HeadlineNewsIdx) in maxHeadlineNews" v-bind:key = "HeadlineNewsIdx">
                    <HeadlineCardNews v-bind:news="{portal : portal, newsIdx : HeadlineNewsIdx}"  /> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadlineCardNews from "./HeadlineCardNews.vue";


export default {
    props :['newsPortal'],

    components : {
        HeadlineCardNews
    },

    data(){
        // temporari loop counter
        return {
            maxHeadlineNews : 6
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

    .ri-arrow-right-s-line{
        position: relative;
        top: 2.5px;
    }

    .router-latest {
        text-decoration: none;
        color: #F45800;
    }

</style>