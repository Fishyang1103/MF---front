<template lang="pug">
#adminorders.content
  b-table(:items="orders" :fields='fields')
    template(#cell(user)='data')
      | {{ data.item.user.account}}
    template(#cell(name)='data')
      | {{ data.item.userInfo.name}}
    template(#cell(phone)='data')
      | {{ data.item.userInfo.phone}}
    template(#cell(address)='data')
      | {{ data.item.userInfo.address}}
    template(#cell(courier)='data')
      | {{ data.item.userInfo.courier}}
    template(#cell(date)='data')
      | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
    template(#cell(products)='data')
      ul
        li(v-for='product in data.item.products' :key='product._id') {{ product.product.name }} x {{ product.quantity }}
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      fields: [
        { key: '_id', label: '單號' },
        { key: 'name', label: '姓名' },
        { key: 'phone', label: '連絡電話' },
        { key: 'address', label: '送達地址' },
        { key: 'courier', label: '運送方式' },
        // { key: 'user', label: '使用者' },
        { key: 'date', label: '訂購日期' },
        { key: 'products', label: '商品' },
        { key: 'remark', label: '備註' }
      ]
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

</template>
<style scope>
.content{
  margin-left:25%;
}
</style>
