<template lang="pug">
#adminorders
  b-card.mt-5(img-top :img-src='this.orders.userInfo.image')
    b-card-body
      b-card-text {{ this.orders.remark }}
</template>
<script>
export default {
  data () {
    return {
      orders: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
      console.log(this.orders)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
