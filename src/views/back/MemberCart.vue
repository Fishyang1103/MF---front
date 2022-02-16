<template lang="pug">
#membercart
  b-container
    b-table(:items='products' :fields='fields' :tbody-tr-class="rowClass")
      template(#cell(image)='data')
        img(v-if='data.item.product.image' :src='data.item.product.image' style='height: 50px')
      template(#cell(name)='data')
        | {{ data.item.product.name }}
      template(#cell(price)='data')
        | {{ data.item.product.price }}
      template(#cell(action)='data')
        b-form-spinbutton(v-model='data.item.quantity' min="1" inline @input='updateCart(data.index, data.item.quantity)')
        | &emsp;&emsp;
        b-btn(variant='light' @click='updateCart(data.index, 0)') 🗑️
    p.text-right 總金額 {{ total }}
    b-btn.w-25(variant='success' block @click='checkout' :disabled='products.length === 0') 結帳
</template>

<script>
export default {
  data () {
    return {
      products: [],
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'name', label: '名稱' },
        { key: 'price', label: '價格' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  methods: {
    async updateCart (index, quantity) {
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[index].product._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
        if (quantity === 0) {
          this.products.splice(index, 1)
          // 購物車刪除項目 右上數目更改
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改購物車失敗'
        })
      }
    },
    async checkout () {
      try {
        await this.api.post('/orders', {}, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$router.push('/orders')
        // 結帳完購物車數量歸零
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    // 已下架的商品會出現紅底
    rowClass (item, type) {
      if (!item || type !== 'row') return
      return !item.product.sell ? 'bg-danger' : ''
    }
  },
  computed: {
    // 總金額計算
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>
