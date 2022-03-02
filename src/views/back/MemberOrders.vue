<template lang="pug">
div#orders.contentMt
  b-container
    b-table(:items="orders" :fields='fields' stacked="md")
      template(#cell(date)='data')
        | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
      template(#cell(price)='data')
        | {{ sumPrice(data.item.products) }}
      template(#cell(deliveryDate)='data')
        | {{ data.item.userInfo.deliveryDate}}
      template(#cell(deliveryTime)='data')
        | {{ data.item.userInfo.deliveryTime}}
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
        { key: 'products', label: '商品' },
        { key: 'price', label: '總金額' },
        { key: 'deliveryDate', label: '欲送日期' },
        { key: 'deliveryTime', label: '時間' },
        { key: 'date', label: '訂購日' }
      ]
    }
  },
  methods: {
    sumPrice (products) {
      const result = products.reduce((accumulator, currentValue) => {
        return (
          accumulator + currentValue.quantity * currentValue.product.price
        )
      }, 0)
      console.log(result)
      return new Intl.NumberFormat('en-IN').format(result)
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
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
