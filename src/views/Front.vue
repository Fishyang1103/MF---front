<template lang="pug">
#top
  //- div.fixed-top
  //-   div.w-100.backgroundWhite(style='height: 54px')
  //-     b-btn(v-if="!user.isLogin" variant="danger" @click="signForLine") line速登
  //-     b-btn(v-if="!user.isLogin" to='/signup') 註冊
  //-     b-btn(v-if="!user.isLogin" to='/login') 登入
  //-     b-btn(v-if="user.isLogin" @click="logout") 登出
  //-   b-navbar.top2(toggleable='lg' type='dark')
  //-     div.w-100.h-50.height.color
  //-     b-container
  //-       //- b-navbar-brand(to='/') 購物網
  //-       b-navbar-toggle(target='nav-collapse')
  //-       b-collapse#nav-collapse(is-nav)
  //-         b-navbar-nav.d-flex.justify-content-center.align-items-center.mx-auto
  //-           b-nav-item.h5.nar(to='/about') 關於我們
  //-           b-nav-item.h5.nar(to='/signup') 商品介紹
  //-           b-nav-item.img.nar
  //-             span
  //-               img(src='https://picsum.photos/100/100/?image=10')
  //-           b-nav-item.h5.nar(to='/signup') 花語大全
  //-           b-nav-item.h5.nar(to='/care') 花の呵護
  div.w-100#nav.fixed-top
    div.backgroundWhite
      b-btn(v-if="!user.isLogin" variant="danger" @click="signForLine") line速登
      b-btn(v-if="!user.isLogin" to='/signup') 註冊
      b-btn(v-if="!user.isLogin" to='/login') 登入
      b-btn(v-if="user.isLogin" @click="logout") 登出
    div.color
      b-navbar.align-items-center.h-100(toggleable="lg" type="dark")
        b-navbar-toggle(target="nav-collapse")
        b-collapse(id="nav-collapse" is-nav)
          b-navbar-nav.mx-auto
            b-nav-item.h5.my-0.nar(to='/about') 關於我們
            b-nav-item.h5.my-0.nar(to='/signup') 商品介紹
            b-nav-item.img.nar
              span#aaa
                //- div.box
            b-nav-item.h5.my-0.nar(to='/signup') 花語大全
            b-nav-item.h5.my-0.nar(to='/care') 花の呵護
  div#content
    router-view
  div#footer.d-flex.align-items-center.justify-content-center.mt-5
    p.mb-0.mx-3 © 2022  Fish Yang
    p.mb-0.mx-3 圖片來源：unsplash.com｜僅學習用途，無商業使用
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Rowdies:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
html,body {
  font-family: 'Noto Sans TC', sans-serif;
  font-family: 'Rowdies', cursive;
  font-family: 'Ubuntu', sans-serif;
}
</style>

<style scope>
#aaa {
  margin-right: 50px;
  margin-left: 50px;
}
/* .box{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
} */
#content {
  margin-top: 150px;
}
#nav > div {
  min-height: 70px;
}
.backgroundWhite{
  background-color:#FCFCFC;
}

.height{
  position:absolute;
  top:25%;
  left: 0;
  z-index: -1;
}
/* .nar{
  margin:0 85px;
} */

.color{
  background:#D95D5E;
}

/* .img{
  position: absolute;
  top:-30px;
  left:50vw;
  transform: scale(1.5) translateX(-50%);
  z-index:99999;
} */
.position{
  position: fixed;
  z-index: 999;
  width: 100vw;
}
.top{
  top: 0;
  right:0;
}
.top2{
  top: 7%;
}
</style>

<!-- <style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
<script>
export default {
  name: 'App',
  // computed: {
  //   // 判斷有無登入，如果登入就會把登入的按鈕拿掉，剩下登出鈕
  //   user () {
  //     return this.$store.getters['user/user']
  //   }
  // },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    },
    random (R) {
      return Math.floor(Math.random() * R)
    },
    async signForLine () {
      let link = 'https://access.line.me/oauth2/v2.1/authorize?'
      link += 'response_type=code' // 使用者登入後，請LINE回傳「code」（授權碼）
      link += '&client_id=' + process.env.VUE_APP_CHANNEL_ID
      link += '&redirect_uri=' + process.env.VUE_APP_CALLBACK_URL // /users/signInLine
      link += '&state=' + this.randomState
      // TODO: state 建議在 Web app 請求中，針對每個登入階段隨機生成。並確認該值與Web app 中接收授權碼時的 state 屬性值一致。
      link += '&bot_prompt=normal' // 預設要加官方帳號好友
      link += '&scope=openid%20profile' // 預設申請使用者資料及 token
      window.location.href = link
      console.log(link)
      // window.open(link, '_self') // 跳轉頁面

      // 在 LINE Login 授權 URL ，並讓用戶重新導向
      // https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id={CHANNEL_ID}&redirect_uri={CALLBACK_URL}&state={STATE}&bot_prompt={BOT_PROMPT}&scope={SCOPE_LIST}

      // 回傳的  https://dtns-test-app.herokuapp.com/auth?friendship_status_changed=false&code=JFJstzoT7w62112rXfyy&state=MX44ZkxPWUg%3D
    }
  }
}
</script>
