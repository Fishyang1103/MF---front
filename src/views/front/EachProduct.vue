<template lang="pug">
#eachproduct
  b-container.contentMt
    b-overlay(:show='!sell')
      template(#overlay)
        h1 花材缺貨中
      b-row
        b-col(cols='6')
          h1 {{ name }}
        b-col(cols='6')
          h4.text-right ${{ price }}
          b-form-input(type='number' v-model.number='quantity' :state='quantityState' min='0')
          b-btn(variant='primary' @click='addCart') 加入購物車
        b-col(cols='12')
          img.w-100(:src='image')
          p(style='white-space: pre') {{ description }}
</template>

<script>

export default {
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: false,
      category: '',
      quantity: 0
    }
  },
  methods: {
    // 加入購物車
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      // 進入各個商品頁的title
      document.title = `${this.name} | MF`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
