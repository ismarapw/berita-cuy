<template>
    <div class="banner" v-if="bannerNews !== null">
        <router-link v-bind:to = "{name : 'detail', params : {portal : bannerNews.portal, category : 'terbaru', id : bannerNews.id}}">
            <div class="img-banner">
                <img v-bind:src= "bannerNews.image" alt="">
            </div>
            <div class="content-banner flex justify-content-center">
                <div class="box-banner">
                    <span class="text-grey">Terbaru</span>
                    <h2 class="banner-title">{{bannerNews.title}}</h2>
                    <p class="text-grey">{{bannerNews.pubDate}}</p>
                    <span class="portal-text">{{bannerNews.portal}}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props : ['newsPortal'],

     data(){
        return {
            bannerNews: null,
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
        // ambil portal random
        const randPortal = this.newsPortal[Math.floor(Math.random() * this.newsPortal.length)];

        // request detail berita dari portal
        axios.get("https://api-berita-indonesia.vercel.app/" + randPortal + "/terbaru")
        .then((response) => {
            // ambil daftar berita
            const newsList = response.data.data.posts;

            // ambil suatu berita dari daftar berita secara random
            const randNews = Math.floor(Math.random() * newsList.length);

            // ambil nilai tanggal
            const date = new Date(newsList[randNews].pubDate);

            // update nilai banner
            this.bannerNews = {};
            this.bannerNews.title = newsList[randNews].title;
            this.bannerNews.id = randNews;
            this.bannerNews.pubDate =  this.parseDate(date);
            this.bannerNews.image= newsList[randNews].thumbnail;
            this.bannerNews.portal = randPortal;
        })
        .catch((error) => console.log(error));
    }

}
</script>

<style>
    .banner {
        margin-top: 2.5rem;
        cursor: pointer;
        position: relative;
    }

    .img-banner img {
        width: 100%;
        max-height: 480px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .content-banner {
        position: absolute;
        bottom: -7rem;
        width: 100%;
    }

    .box-banner {
        background-color: rgb(255, 255, 255);
        width: 80%;
        padding: 40px 30px;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    }


    .banner-title {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2; 
        -webkit-box-orient: vertical;
        color: #000;
        /* font-size: 1.5rem; */
    }

    @media screen and (max-width: 768px) {
        .banner-title {
            font-size: 1.25rem;
            margin-top: 7px;
        }
    }


</style>