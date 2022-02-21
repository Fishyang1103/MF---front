<template lang="pug">
#about
  b-container.contentMt
    b-row
      b-col(sm='12', md='6').p-0
        img.img-fluid(src='~@/assets/image/logo.jpg')
      b-col(sm='12', md='6').my-5
        h3.wordColor.my-5 關於我們
        p.mb-3.
          MF Flower Shop #[br]#[br]#[br]
    b-row.flex-row-reverse.mt-5
      b-col(sm='12', md='6').p-0
        iframe.ml-5(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7036497990503!2d121.41732691433089!3d25.04412928396764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1640161938195!5m2!1szh-TW!2stw' width='517' height='400' style='border:0;' allowfullscreen loading='lazy')
      b-col(sm='12', md='6').my-5
        h3.wordColor.my-5 聯絡我們
        p.mb-3.
          營業時間：週一至週六，10:00 am - 19:00 pm#[br]#[br] 連絡電話：02-1889-271#[br]#[br] 地址：天堂路520巷13號1樓 #[br]#[br] E-mail：mfflower0213@fowershop.com
</template>

<!-- <style scope>
#about{
  font-weight:bold;
}
/* .mt{
  margin-top:100px;
} */
/* .mtt{
  margin-top:150px;
} */
.card-body{
  display:flex;
  align-items:center;
  justify-content:center;
}
/* h1{
  color:#DC8F99;
} */
.logo{
  background:url('~@/assets/image/logo130.png') no-repeat center;
  /* object-fit:cover; */
  height:100%;
  border:none;
}
</style> -->
