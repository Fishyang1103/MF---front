<template lang="pug">
#adminorders
  //- b-card.mt-5(img-top :img-src='this.orders.image')
  //-   b-card-body
  //-     b-card-text {{ this.orders.userInfo.remark }}
  b-row
      b-col(cols='12' md='6' lg='3' v-for='orders in orders' :key='orders.name')
        ProductCard(:orders='orders')
</template>
<script>
import ProductCard from '../../components/ProductCard.vue'
export default {
  components: {
    ProductCard
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
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
