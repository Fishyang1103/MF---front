<template lang="pug">
#about.backgroundWhite
  b-container
    div.mt
      b-card.mb-5(img-src='~@/assets/image/logo.png' img-alt='Card image' img-left style='border:none;')
        b-card-text.ml-3
          h1.wordColor 關於我們#[br]
          p &ensp;MF Flower Shop #[br]#[br]#[br]兩個好朋友，各取英文名字的第一個當店名 #[br]使用玫瑰花當 Logo 是有深刻含義的 #[br].......
      b-card.mb-5.mtt.flex-row-reverse(style='border:none;')
        b-card-text.mr-5
          h1.wordColor 聯絡我們#[br]#[br]
          p  營業時間：週一至週六，10:00 am - 19:00 pm#[br] 連絡電話：02-1889-271#[br] 地址：天堂路520巷13號1樓 #[br] E-mail：mfflower0213@fowershop.com
        iframe.ml-5(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7036497990503!2d121.41732691433089!3d25.04412928396764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1640161938195!5m2!1szh-TW!2stw' width='517' height='520' style='border:0;' allowfullscreen loading='lazy')
  div#footer.d-flex.align-items-center.justify-content-center.mt-5
    p.mb-0.mx-3 © 2022  Fish Yang
    p.mb-0.mx-3 圖片來源：https://unsplash.com/｜僅學習用途，無商業使用
</template>

<style scope>
#about{
  font-weight:bold;
}
.mt{
  margin-top:100px;
}
.mtt{
  margin-top:150px;
}
.card-body{
  display:flex;
  align-items:center;
  justify-content:center;
}
/* h1{
  color:#DC8F99;
} */
</style>
