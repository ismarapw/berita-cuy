<template>
    <div class="card-news" v-if="detailNews !== null">
        <router-link class="router" v-bind:to = "{name : 'detail', params : {portal : detailNews.portal, category : 'terbaru', id : detailNews.id}}">
            <div class="flex">
                <div>
                    <img v-bind:src= "detailNews.image" alt="" class="news-img">
                </div>
                <div class="content-news">
                    <h3 class="headline-title">{{detailNews.title}}</h3>
                    <p class="text-grey">{{detailNews.pubDate}}</p>
                    <span class="portal-text">{{detailNews.portal}}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['news'],

    
     data(){
        return {
            detailNews: null,
        }
    },

    methods : {
        parseDate(date){
            const month = ["Januari","Februari","Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

            return day[date.getDay()] + ", " + date.getDate() +" " + month[date.getMonth()] + " " + date.getFullYear()
        }
    },

    mounted(){
        // request detail berita dari portal
        axios.get("https://api-berita-indonesia.vercel.app/" + this.news.portal + "/terbaru")
        .then((response) => {
            // ambil n berita pertama
            const newsList = response.data.data.posts.slice(0,6);

            // ambil berita ke x
            const news = newsList[this.news.newsIdx];

            // ambil nilai tanggal
            const date = new Date(news.pubDate);

            // update nilai banner
            this.detailNews = {};
            this.detailNews.title = news.title;
            this.detailNews.id = this.news.newsIdx;
            this.detailNews.pubDate =  this.parseDate(date);
            this.detailNews.image= news.thumbnail;
            this.detailNews.portal = this.news.portal;

        })
        .catch((error) => console.log(error));
    }
}
</script>

<style>
    .card-news{
        cursor: pointer;
    }

    .card-news .router {
        text-decoration: none;
        
    }

    .card-news .router .headline-title {
        color: #000 ;
    }

    .news-img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-radius: 5px;
        transition: .2s ease-out;
    }

    .card-news:hover .news-img {
        width: 100px;
        transition: .1s ease-in;
        box-shadow: 4px 4px 8px #ccc;
        border-radius: 5px;
        transition: .2s ease-in;
    }

</style>