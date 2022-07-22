<template>
    <div class="detail-view">
        <div v-if="detailNews === null">
            <div>Loading</div>
        </div>

        <div v-if="detailNews === 'Portal atau Kategori Tidak Ditemukan' || detailNews === 'Berita Tidak Ditemukan'">
 
            <div class="flex justify-content-center">
                <img src="../assets/img/not-found.svg" alt="" class="error-img">
            </div>
            <h2 class="error-msg">{{detailNews}}</h2>
        </div>
        
        <div v-else>
            <ul class="flex">
                <li>
                    <router-link class="link-before" v-bind:to= "{name : 'home'}">Home</router-link>
                    <i class="ri-arrow-right-s-line ico-right"></i>    
                </li>
                <li>
                    <router-link class="link-before" v-bind:to = "{name : 'portal', params : {portal: portal}}">{{portal}}</router-link>
                    <i class="ri-arrow-right-s-line ico-right"></i>    
                </li>
                <li>Detail</li>
            </ul>
            <div class="detail-content" v-if="detailNews !== null">
                <h1 class="news-title">{{detailNews.title}}</h1>
                <img v-bind:src= detailNews.image class="detail-image" alt="">
                <p class="news-date">Jumat, 23 Maret 2021</p>
                <p class="news-description">{{detailNews.description}}...</p>
                <div class="flex justify-content-center">
                    <a class="news-detail-link" v-bind:href= detailNews.link>Baca Selengkapnya di {{portal}}</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    props : ['portal','category','id'],

    data(){
        return {
            detailNews : null,
        }
    },

    mounted(){
        // request detail berita dari portal
        axios.get("https://api-berita-indonesia.vercel.app/" + this.portal + "/" + this.category)
        .then((response) => {
            // cek status response
            if(response.data.success){
                // ambil berita berdasarkan id 
                const getNewsResponse = response.data.data.posts[this.id];

                // jika id tidak valid maka detail berita tidak dapat digenerate
                this.detailNews = getNewsResponse === undefined ? "Berita Tidak Ditemukan" : {};

                // jika id valid maka generate detail berita
                if(this.detailNews !== "Berita Tidak Ditemukan"){
                    this.detailNews.title = getNewsResponse.title;
                    this.detailNews.image = getNewsResponse.thumbnail;
                    this.detailNews.date = getNewsResponse.pubDate;
                    this.detailNews.description = getNewsResponse.description;
                    this.detailNews.link = getNewsResponse.link;
                }

                console.log(this.detailNews);
            }
        })
        .catch((error) => {
            // cek paramater portal dan kategori, jika error 404 maka detail berita tidak dapat digenerate
            if(error.response.status === 404) this.detailNews = "Portal atau Kategori Tidak Ditemukan";
            console.log(this.detailNews);
        });
    }
}
</script>

<style>
    ul {
        list-style: none;
        padding: 0;
    }

    ul li:not(:nth-child(1)) {
        margin-left: 10px;
    }

    .link-before {
        text-decoration: none;
        color: #F45800;
    }

    .ico-right {
        position: relative;
        top: 2px;
        left: 5px;
    }

    .detail-view .news-title {
        font-size: 28px;
        text-align: center;
    }

    .detail-content {
        width: 70%;
        margin: auto;
    }

    .detail-image {
        width: 100%;
        object-fit: cover;
        margin-top: 1.5rem;
        border-radius: 10px;
        box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .error-img {
        width: 50%;
    }

    .news-description{
        line-height: 170%;
    }

    .news-date {
        color: #636363 ;
    }

    .error-msg {
        text-align: center;
        margin-top: 2rem;
    }

    .news-detail-link {
        display: inline-block;
        text-decoration: none;
        color: #F45800;
        border: 1px solid #F45800;
        padding: 7px 15px;
        border-radius: 5px;

    }

    @media screen and (max-width:768px) {
        .detail-content{
            width: 100%;
        }

        .detail-view .news-title {
            font-size: 1.5rem;
        }

        .error-img {
            width: 100%;
        }
    }

</style>