<template>
    <div class="about-view">
       <header>
            <h1>Tentang</h1>
            <hr class = "underline-text">
        </header>
        <div class="about-content flex">
          <div class="ilustration-wrapper">
            <img src="../assets/img/about-ilustration.svg" alt="">
          </div>
          <div class="text-wrapper">
            <p>BeritaCuy adalah aplikasi berbasis website yang menyediakan berbagai macam berita dari berbagai portal berita yang ada di Indonesia. Pada website ini terdapat lima portal berita yaitu Antara, CNN, Okezone, CNBC dan Okezone. Setiap detail berita tidak ditampilkan pada website ini, melainkan detail berita akan diarahkan ke portal berita masing-masing.</p>
            <p>Website ini dibuat hanya sebatas untuk latihan saja, tidak ada maksud mencari keuntungan dan hal lain yang dapat merugikan pihak tertentu. Terima kasih juga untuk @renomureza yang telah membuat API ini untuk masing-masing portal berita.</p>
          </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'HomeView',

}
</script>

<style>
  .about-view p {
    line-height: 170%;
  }
  .ilustration-wrapper {
    order: 2;
  }

  .ilustration-wrapper img {
    width: 400px;
  }

  .text-wrapper {
    order: 1;
  }


  @media screen and (max-width:768px) {
      .about-content{
        flex-direction: column;
      }


      .ilustration-wraper {
        order: 1;
      }

      .ilustration-wrapper img {
        width: 100%
      }

      .text-wrapper {
        order: 2;
      }

  }
</style>