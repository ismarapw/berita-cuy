<template>
    <div class="banner">
        <div class="img-banner">
            <img src="https://img.antaranews.com/cache/800x533/2022/07/05/yuan-china.jpg.webp" alt="">
        </div>
        <div class="content-banner flex justify-content-center">
            <div class="box-banner">
                <span class="text-grey">Terbaru</span>
                <h2 class="banner-title">Yuan turun tipis 4 basis poin menjadi 6,7451 terhadap dolar AS</h2>
                <p class="text-grey">Selasa, 17 Maret 2021</p>
                <span class="portal-text">Okezone</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
    }


</style>