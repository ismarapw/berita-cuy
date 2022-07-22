<template>
  <div class="not-found-view">
    <div class="flex justify-content-center">
        <img src="../assets/img/not-found.svg" alt="" class="error-img">
    </div>
    <h2 class="error-msg">Halaman tidak ditemukan</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .error-img {
        width: 50%;
    }

    .error-msg {
        text-align: center;
        margin-top: 2rem;
    }
    
    @media screen and (max-width:768px) {
        .error-img {
            width: 100%;
        }
    }
</style>