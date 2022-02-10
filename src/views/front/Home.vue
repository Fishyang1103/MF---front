<template lang="pug">
#home
  b-container.px-0.mt(fluid)
    b-carousel#carousel-fade(:interval="10000" style='text-shadow: 0px 0px 5px #000' fade indicators img-width='100vw' img-height='480')
      b-carousel-slide.objectFit(img-src='~@/assets/image/carousel-1-1.jpg')
      b-carousel-slide.objectFit(img-src='~@/assets/image/carousel-2-1.jpg')
      b-carousel-slide.objectFit(img-src='~@/assets/image/carousel-3-1.jpg')
  h3.text-center.my-5.wordColor 熱銷商品
  div
    b-container.d-flex.justify-content-center
      b-card.mb-2.mx-4(title='鮮花' img-src='~@/assets/image/taisiia-shestopal-JZDyFwGAEqY-unsplash.jpg' img-alt='Image' img-top tag='article' style='width:30%;text-align:center;border:none')
      b-card.mb-2.mx-4(title='鮮花' img-src='~@/assets/image/demi-he-hPcxvCecdPI-unsplash.jpg' img-alt='Image' img-top tag='article' style='width: 30%;text-align:center;border:none')
      b-card.mb-2.mx-4(title='鮮花' img-src='~@/assets/image/care-31.jpg' img-alt='Image' img-top tag='article' style='max-width: 20rem;text-align:center;border:none')
  h3.text-center.my-5.wordColor 花語大全
  div
    b-container
      .example-3d
        swiper.swiper(:options='swiperOption')
          swiper-slide.rose
          swiper-slide.rose
          swiper-slide.rose
          swiper-slide.rose
          swiper-slide.rose
          swiper-slide.rose
          swiper-slide.rose
          .swiper-pagination(slot='pagination')
  h3.text-center.my-5.wordColor 花の呵護
  div#hover.d-flex
    .card
      img(src='https://images.pexels.com/photos/1248157/pexels-photo-1248157.jpeg?cs=srgb&dl=photo-of-galaxy-1248157.jpg&fm=jpg')
    .card
      img(src='https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    .card
      img(src='https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?cs=srgb&dl=amazing-astronomy-background-bright-544268.jpg&fm=jpg')
</template>

<style scope>
.card-img-top{
  height:75vh;
}
.rose{
  background: url('~@/assets/image/UNADJUSTEDNONRAW_thumb_9f9.jpg');
}

/* #hover.card{
    margin-top: 200px!important;
    width:400px;
    margin: auto;
    height: 400px;
    position: relative;
    transition: transform 4s ease-in;
    overflow: hidden;
    border:4px solid #fff;
}

#hover img{
    width:100%;
    height: 400px;
    transition: transform 1s ease-in;
}

#hover img:hover{
    transform: scale(1.2);
}

#hover .card:before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    content: "111";
    transform:translateY(-100%);
    font-size: 25px;
    color:#fff;
    display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    transition: transform .4s ease-in;
    border:4px solid white;
    justify-content: center;
    box-sizing: border-box;
    /* display:none;
}

#hover .card:after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    content: "111";
    transform:translateY(100%);
    font-size: 25px;
    color:#fff;
    display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    transition: transform .4s ease-in;
    border:4px solid white;
    justify-content: center;
    box-sizing: border-box;
     display:none;
}

#hover .card:hover::before{
  transform: translateY(0%);
  display:block;
}

#hover .card:hover::after{
  transform: translateY(0%);
  display:block;
  } */

</style>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-3d-coverflow',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 15,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        breakpoints: {
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          920: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.example-3d {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

.swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      text-align: center;
      font-weight: bold;
      font-size: 18px;
      background-color: #2C8DFB;
      background-position: center;
      background-size: cover;
      color: white;
    }
      &.slide-1 {
          background-image:url('~@/assets/image/UNADJUSTEDNONRAW_thumb_9f9.jpg');
        }

    .swiper-pagination {
      .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: white;
        opacity: 0.5;
      }
    }
  }
</style>
