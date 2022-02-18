<template lang="pug">
#products
  b-container.contentMt
    b-row.d-flex.justify-content-center.my-5
      b-tabs.text-center(pills)
        b-tab(title='全部商品' active)
        b-tab(title='經典鮮花')
        b-tab(title='蘭花盆景')
        b-tab(title='鮮花盆花')
        b-tab(title='綠意盎然')
    b-row
      b-col(cols='12' md='6' lg='3' v-for='product in products' :key='product._id')
        ProductCard(:product='product')
</template>

<script>
import ProductCard from '../../components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  // 把後端的資料放進來
  data () {
    return {
      products: [],
      filter: ''
    }
  },
  // 按鈕篩選
  // computed: {
  //   fillterItems () {
  //     return this.products.filter(item => {
  //       if (this.filter === '') return true
  //       return item.category === this.filter
  //     })
  //   }
  // },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '商品取得失敗'
      })
    }
  }
}

</script>
