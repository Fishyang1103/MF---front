<template lang="pug">
#products
  b-container.contentMt
    //- div.goTop
    //-   a.goTopBtn.jq-goTop(href='#')
    //-   i.fas.fa-arrow-alt-circle-up.fa-3x
    //-   font-awesome-icon.iconColor(:icon="['fas', 'fa-right-from-bracket']")
    h1.text-center.wordColor.mb-5#title 商品列表
    b-row.d-flex.justify-content-center.my-3
      b-col(cols='12')
      b-tabs.text-center(pills)
        b-tab(title='全部商品' active  @click="filter = ''")
        b-tab(title='經典鮮花' @click="filter = '經典鮮花'")
        b-tab(title='蘭花盆景' @click="filter = '蘭花盆景'")
        b-tab(title='鮮花盆花' @click="filter = '鮮花盆花'")
        b-tab(title='綠意盎然' @click="filter = '綠意盎然'")
    b-row
      b-col(cols='12' md='6' lg='3' v-for='product in fillterItems' :key='product._id')
        ProductCard(:product='product')
    div.top(v-if="btnFlag" @click="backTop")
      font-awesome-icon.iconColor(:icon="['fas', 'fa-circle-up']" size="4x")
</template>
<style scoped>
.top {
    /* height: 60px ;
    width: 50px ; */
    position: fixed ;
    bottom: 45px ;
    right: 35px ;
    background: transparent ;
    /* border-radius: 60%;
    box-shadow: 0 0 6px rgba(0,0,0, .12) ; */
    text-align: center ;
    line-height: 60px ;
    color: red ;
    cursor: pointer ;
    /* transform: rotate(270deg) ; */
}
</style>
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
      filter: '',
      btnFlag: false
    }
  },
  // 按鈕篩選
  computed: {
    fillterItems () {
      return this.products.filter(item => {
        if (this.filter === '') return true
        return item.category === this.filter
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      const that = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 50) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  },
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
