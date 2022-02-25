<template lang="pug">
#home
  b-container.px-0.mt(fluid)
    b-carousel#carousel-fade(:interval="3000" style='text-shadow: 0px 0px 5px #000' fade indicators img-width='100vw' img-height='480')
      b-carousel-slide.objectFit(img-src='~@/assets/image/carousel-1-1.jpg')
      b-carousel-slide.objectFit(img-src='~@/assets/image/carousel-2-1.jpg')
      b-carousel-slide.objectFit(img-src='~@/assets/image/carousel-3-1.jpg')
  h2.text-center.my-5.wordColor 熱銷商品
  b-container
    b-row.d-flex.justify-content-center
      b-col.d-flex.align-items-center.justify-content-center(sm='12',md='4')
        b-card.mb-2.text-center(title='經典紅玫瑰' img-src='~@/assets/image/hotproduct-1.jpg' img-alt='Image' img-top tag='article' style='max-width: 20rem;')
          b-card-text
            h5 $2880
            b-btn.mt-2(to='/eachproduct/620f4c00f9d74e6a046cf9de' block style="border:none;background: #D95D5E;color:white") 觀看更多
      b-col.d-flex.align-items-center.justify-content-center(sm='12',md='4')
        b-card.mb-2.text-center(title='太陽之花' img-src='~@/assets/image/hotproduct-2.jpg' img-alt='Image' img-top tag='article' style='max-width: 20rem;')
          b-card-text
            h5 $3280
            b-btn.mt-2(to='/eachproduct/620f4da9f9d74e6a046cf9f0' block style="border:none;background: #D95D5E;color:white") 觀看更多
      b-col.d-flex.align-items-center.justify-content-center(sm='12',md='4')
        b-card.mb-2.text-center(title='純潔的友誼' img-src='~@/assets/image/hotproduct-3.jpg' img-alt='Image' img-top tag='article' style='max-width: 20rem;')
          b-card-text
            h5 $2680
            b-btn.mt-2(to='/eachproduct/6211f9a03b1c002e031f8f9f' block style="border:none;background: #D95D5E;color:white") 觀看更多
  h2.text-center.my-5.wordColor 花語大全
  div.example-3d
    swiper.swiper(:options='swiperOption')
      swiper-slide.lang-1
        h4(style="position: absolute;right:0px;bottom:-10px;") 玫瑰
      swiper-slide.lang-2
        h4(style="position: absolute;right:0px;bottom:-10px;") 百合
      swiper-slide.lang-3
        h4(style="position: absolute;right:0px;bottom:-10px;") 鬱金香
      swiper-slide.lang-4
        h4(style="position: absolute;right:0px;bottom:-10px;") 菊花
      swiper-slide.lang-5
        h4(style="position: absolute;right:0px;bottom:-10px;") 桔梗
      swiper-slide.lang-6
        h4(style="position: absolute;right:0px;bottom:-10px;") 向日葵
      .swiper-pagination(slot='pagination')
  h2.text-center.my-5.wordColor 花の呵護
  b-container#hover.my-5
    b-row.d-flex.justify-content-center
      b-col.care-1(sm='12',md='4')
        img.objectFit(src='~@/assets/image/carehome-1.jpg')
      b-col.care-2.px-2(sm='12',md='4')
        img.objectFit(src='~@/assets/image/carehome-2.jpg')
      b-col.care-3(sm='12',md='4')
        img.objectFit(src='~@/assets/image/orchid-2.jpeg')
  div.top(v-if="btnFlag" @click="backTop")
    font-awesome-icon.iconColor(:icon="['fas', 'fa-circle-up']" size="4x")
</template>

<style scope>
/* .card-img-top{
  height:75vh;
} */

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
        loop: true,
        centeredSlides: true,
        spaceBetween: 15,
        slidesPerView: 'auto',
        autoplay: {
          delay: 3000
        },
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
      },
      btnFlag: false
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
