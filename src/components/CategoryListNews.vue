<template>
  <div class="news-list">
    <div v-if="newsList === null">
        <div>Loading</div>
    </div>

    <div v-if="newsList === 'Portal atau Kategori Tidak Ditemukan'">
        <div class="flex justify-content-center">
            <img src="../assets/img/not-found.svg" alt="" class="error-img">
        </div>
        <h2 class="error-msg">{{newsList}}</h2>
    </div>

    <div v-else>
        <router-link v-for="news in newsList" v-bind:key="news.id" class="a-news flex" v-bind:to =  "{name : 'detail', params : {portal : portalCategory.portal, category : portalCategory.category, id : news.id}}">
            <div>
                <img v-bind:src = news.image alt="" class="news-img">
            </div>
            <div>
                <div class="content">
                    <p class="text-grey">{{parseDate(news.date)}}</p>
                    <h2 class="text-news">{{news.title}}</h2>
                    <span class="portal-text">{{portalCategory.category}}</span>
                </div>
            </div>
        </router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
    props :['portalCategory'],


    data(){
        return {
            newsList : null
        }
    },

    methods : {
        getNewsFromPortal(portal, category){
            // request detail berita dari portal
            axios.get("https://api-berita-indonesia.vercel.app/" + portal + "/" + category)
            .then((response) => {
                // cek status response
                if(response.data.success){
                    // ambil responese daftar berita
                    const newsResponseList = response.data.data.posts;

                    // generate daftar berita
                    this.newsList = [];
                    for(let idx = 0 ; idx < newsResponseList.length ; idx++){
                        this.newsList.push({
                            id : idx,
                            title : newsResponseList[idx].title,
                            date : newsResponseList[idx].pubDate,
                            image : newsResponseList[idx].thumbnail
                        })
                    }
                }
            })
            .catch((error) => {
                // cek paramater portal dan kategori, jika error 404 maka detail berita tidak dapat digenerate
                if(error.response.status === 404) this.newsList = "Portal atau Kategori Tidak Ditemukan";
            });
        },

         parseDate(date){
            const month = ["Januari","Februari","Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            const makeDate = new Date(date);

            return day[makeDate.getDay()] + ", " + makeDate.getDate() +" " + month[makeDate.getMonth()] + " " + makeDate.getFullYear()
        }
    },

    mounted(){
        this.getNewsFromPortal(this.portalCategory.portal, this.portalCategory.category);
    },

    watch: {
        portalCategory: function () {
            this.getNewsFromPortal(this.portalCategory.portal, this.portalCategory.category);
        }
    },
}
</script>

<style>
    .news-list {
        margin-top : 3rem;
    }

    .a-news {
        margin-top: 30px;
    }

    .news-img {
        width: 200px;
        height: 150px;
        object-fit: cover;
    }

    .error-img {
        width: 50%;
    }

    .text-news {
        font-size: 20px;
        margin-bottom: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2; 
        -webkit-box-orient: vertical;
        color: #000;
    }

    .content {
        margin: -15px 0 0 20px ;
    }

    .a-news {
        text-decoration: none;
    }


    @media screen and (max-width: 768px) {
        .text-news {
            font-size: 1rem;
        }

        .content {
            margin: -30px 0 20px 20px ;
        }

        .news-img {
            width: 100px;
            height: 100px;
        }

        .error-img {
            width: 100%;
        }
    }
</style>