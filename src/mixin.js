// mixin 所有元件都會用到的
export default {
  computed: {
    // 判斷有無登入，如果登入就會把登入的按鈕拿掉，剩下登出鈕
    user () {
      return this.$store.getters['user/user']
    }
  }
}
