<template lang="pug">
#app
    //- (:key='$route.fullPath') --> 網址換商品id才能成功換內容
    router-view(:key='$route.fullPath')
</template>
<script>
export default {
  async created () {
    // dispatch --> 呼叫 action
    this.$store.dispatch('user/getInfo')
    this.$store.dispatch('user/signInLine')
  }
}

</script>
