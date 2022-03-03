<template lang="pug">
#membercart
  b-container.contentMt
    b-table(:items='products' :fields='fields' :tbody-tr-class="rowClass")
      template(#cell(image)='data')
        img(v-if='data.item.product.image' :src='data.item.product.image' style='height: 50px')
      template(#cell(name)='data')
        | {{ data.item.product.name }}
      template(#cell(price)='data')
        | {{ data.item.product.price }}
      template(#cell(action)='data')
        b-form-spinbutton.mr-3(v-model='data.item.quantity' min="1" inline @input='updateCart(data.index, data.item.quantity)')
        | &emsp;&emsp;
        b-btn(variant='light' @click='updateCart(data.index, 0)') 🗑️
    p.text-center 總金額 {{ total }}
    div.mt-5
      h4 聯絡資訊
      b-form(@submit.stop.prevent @reset="onReset")
        b-row
          b-col(cols='6')
            label(for='feedback-name') 訂購人姓名
            b-form-input#feedback-name(v-model='form.name' :state='validation.name' required)
            b-form-invalid-feedback(:state='validation.name').
              必填欄位
            b-form-valid-feedback(:state='validation.name').
              Ok
          b-col(cols='6')
            label(for='feedback-phone') 聯絡電話
            b-form-input#feedback-phone(v-model='form.phone' :state='validation.phone' required)
            b-form-invalid-feedback(:state='validation.phone').
              若為市內電話需加區碼(例如:台北02)
            b-form-valid-feedback(:state='validation.phone').
              Ok
          b-col(cols='12')
            b-form-group#input-group-3(label='欲送達地址:' label-for='input-3' style="margin-top:10px;")
            b-form-input#input-3(v-model='form.address' placeholder='自取不用填寫' style="margin-top:-10px;")
          b-col.mt-3(cols='6')
            b-form-radio-group(v-model='form.courier' :options='options1' :state='state' name='radio-validation')
              b-form-invalid-feedback(:state='state') 請選擇其中一項
              b-form-valid-feedback(:state='state') ok
          b-col.mt-3(cols='6')
            h3 付款方式：ATM
          b-col.mt-3(cols='6')
            label(for='example-datepicker') 請選擇日期
            b-form-datepicker#example-datepicker.mb-2(:dark='true' :state="true" selected-variant='warning' reset-button  v-model='form.deliveryDate')
          b-col.mt-3(lg='6')
            label#label(for= 'timepicker-placeholder') 請選擇時間
            b-time#time(v-model="form.deliveryTime" placeholder="Choose a time" locale="en")
          b-col.mt-3(cols='6')
            p 🌹傳送圖片或照片 (大小不得超過1M)
            img-inputer(
            accept="image/*"
            v-model="form.image"
            theme="light"
            size="large"
            bottom-text="點選或拖拽圖片以修改"
            hover-text="點選或拖拽圖片以修改"
            placeholder="點選或拖拽選擇圖片"
            :max-size="1024"
            exceed-size-text="檔案大小不能超過"
          )
          b-col.mt-3(cols='6')
            p 🌹傳送小卡範本，將隨花附上
            img(src='~@/assets/image/example.jpg' style="height: 280px;")
          b-col(lg='12')
            b-form-textarea#textarea.mt-3(v-model='form.remark' placeholder='卡片內容' rows='3' max-rows='6')
        b-row.d-flex.justify-content-end.pr-3
          b-btn.mt-3(type='reset' variant='danger') 重置
          b-btn.mt-3.ml-3(variant='success' @click='checkout' :disabled='products.length === 0') 結帳
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
        { key: 'action', label: '數量' }
      ],
      options1: [
        { text: '宅配', value: '宅配' },
        { text: '自取', value: '自取' }
      ],
      form: {
        name: '',
        phone: '',
        address: '',
        courier: '',
        deliveryDate: '',
        deliveryTime: '',
        total: '',
        image: null,
        remark: ''
      }
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
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          /* 把this.form塞進 formdata */
          fd.append(key, this.form[key])
        }
        console.log(fd)
      }
      try {
        await this.api.post('/orders', fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$router.push('/orders')
        // this.$router.push('/back/member/memberinfo')
        // 結帳完購物車數量歸零
        this.$store.commit('user/updateCart', 0)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '送出訂單，專人將於上班日兩天內與您聯絡'
        })
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
    },
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.phone = ''
      this.form.address = ''
      this.form.courier = ''
      this.form.remark = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  computed: {
    validation () {
      return {
        name: this.form.name.length >= 1,
        phone: this.form.phone.length === 10
      }
    },
    state () {
      return Boolean(this.form.courier)
    },
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
