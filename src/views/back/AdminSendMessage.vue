<template lang="pug">
#adminorders.content.p-5
  b-row.mx-0
    b-col(cols='12' md='6' lg='3' v-for='order in orders' v-if='order.userInfo.image!=="null"' :key='order._id')
      SendCard(:order='order')
</template>
<style>
#adminorders{
  background: #FCFCFC;
}
#adminorders.content{
    margin-left:260px;
  }
@media screen and (max-width: 992px) {
  #adminorders.content{
    margin-left:0px;
  }
}
</style>
<script>
import SendCard from '../../components/SendCard.vue'
export default {
  components: {
    SendCard
  },
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
        text: '取得卡片失敗'
      })
    }
  }
}
</script>
