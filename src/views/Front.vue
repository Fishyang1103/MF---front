<template lang="pug">
#top
  div.w-100#nav.fixed-top
    div.text-right.py-3.pr-3
      //- b-btn(v-if="!user.isLogin" to='/signup') 註冊
      b-btn(v-b-modal.modal-1 variant="light" v-if="!user.isLogin")
        b-icon-person-fill.iconColor
      b-btn.ml-2(v-if="user.isLogin && user.isAdmin" to='/back/admin/adminproducts' variant="warning") 後臺管理
      b-btn.mr-4(v-if="user.isLogin && !user.isAdmin" to='/back/member/memberorders' variant="warning") 訂單查詢
      b-btn(v-if="user.isLogin && !user.isAdmin" to='/back/member/membercart' variant="light")
        font-awesome-icon.iconColor(:icon="['fas', 'fa-cart-plus']")
        b-badge(variant='danger') {{ user.cart }}
      b-btn(v-if="user.isLogin" @click="logout" variant="light")
        font-awesome-icon.iconColor.my-0(:icon="['fas', 'fa-right-from-bracket']")
      b-avatar(variant="info" v-if="user.isLogin" :src="user.avatar")
      b-modal#modal-1(ref="my-modal" hide-footer @hidden="hideModal")
        b-tabs(align='around')
          b-tab(title='會員登入' active).text-center.my-5
            img.a(src='~@/assets/image/line.png' style="height: 200px;cursor:pointer;" @click="signForLine"
            )
            h4 Line 快速登入
          b-tab(title='管理者登入')
            b-form(@submit.prevent='login')
              b-form-group(label='帳號' label-for='input-account' description='帳號長度為 4 到 20 個字' :state='state.account' invalid-feedback='帳號格式不正確')
                b-form-input#input-account(v-model='form.account' required placeholder='請輸入帳號' type='text' :state='state.account')
              b-form-group(label='密碼' label-for='input-account' description='帳號長度為 4 到 20 個字' :state='state.account' invalid-feedback='帳號格式不正確')
                b-form-input#input-account(v-model='form.password' required placeholder='請輸入密碼' type='password' :state='state.password')
              .text-center
                b-btn.mx-1(variant='warning' type='sumbit') 登入
    div.themeColor
      b-navbar.align-items-center.h-100(toggleable="lg" type="dark")
        b-navbar-toggle(target="nav-collapse")
        b-collapse(id="nav-collapse" is-nav)
          b-navbar-nav.mx-auto
            b-nav-item.h4.my-0.navWord(to='/about') 關於我們
            b-nav-item.h4.my-0.navWord(to='/products' style="margin-left: 18px;") 商品介紹
            b-nav-item.logoimg(to='/')
              span#space
                div.box
            b-nav-item.h4.my-0.navWord(to='/language' style="margin-right: 18px;") 花語大全
            b-nav-item.h4.my-0.navWord(to='/care') 花の呵護
  div#content
    router-view
  div#footer.mt-5(style="height:52px;")
    b-col.text-center(md='12').
      © 2022  Fish Yang
    b-col.text-center(md='12').
      圖片來源：取自網路｜僅學習用途，無商業使用
</template>
<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$refs['my-modal'].hide()
      this.$store.dispatch('user/login', this.form)
    },
    logout () {
      this.$store.dispatch('user/logout')
    },
    hideModal () {
      this.form.account = ''
      this.form.password = ''
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
      // window.open(link, '_self') // 跳轉頁面

      // 在 LINE Login 授權 URL ，並讓用戶重新導向
      // https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id={CHANNEL_ID}&redirect_uri={CALLBACK_URL}&state={STATE}&bot_prompt={BOT_PROMPT}&scope={SCOPE_LIST}

      // 回傳的  https://dtns-test-app.herokuapp.com/auth?friendship_status_changed=false&code=JFJstzoT7w62112rXfyy&state=MX44ZkxPWUg%3D
    }
  },
  computed: {
    state () {
      return {
        account: this.form.account.length === 0 ? null : this.form.account.length >= 4,
        password: this.form.password.length === 0 ? null : this.form.password.length >= 4
      }
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
    this.$store.dispatch('user/signInLine')
  }
}
</script>
