<template lang="pug">
#adminproduct.content
  b-btn.my-3(variant='success' v-b-modal.modal-product) 新增商品
  b-table(:items="products" :fields='fields' ref='table')
    template(#cell(image)='data')
      img(v-if='data.item.image' :src='data.item.image' style='height: 100px')
    template(#cell(sell)='data')
      | {{ data.item.sell ? '✔' : '' }}
    template(#cell(action)='data')
      b-btn(variant='dark' @click='editProduct(data.index)')
        b-icon-pencil-fill
  b-modal#modal-product(
    :title="form._id.length > 0 ? '編輯商品' : '新增商品'"
    centered
    ok-variant='success'
    ok-title='送出'
    cancel-variant='danger'
    cancel-title='取消'
    @ok='submitModal'
    @hidden='resetForm'
    :ok-disabled="modalSubmitting"
    :cancel-disabled="modalSubmitting"
  )
    b-form-group(
      label='商品名稱'
      label-for='input-name'
      description='商品名稱'
      invalid-feedback='商品名稱必填'
      :state='state.name')
      b-form-input#input-name(
        v-model='form.name'
        type='text'
        required
        placeholder='請輸入商品名稱'
        :state='state.name')
    b-form-group(
      label='商品價格'
      label-for='input-price'
      description='必填欄位'
      invalid-feedback='價格必須是 0 元以上'
      :state='state.price'
    )
      b-form-input#input-price(
        v-model.number='form.price'
        type='number'
        min='0'
        required
        placeholder='請輸入商品價格'
        :state='state.price'
      )
    b-form-group(
      label='商品分類'
      label-for='input-category'
      description='商品分類'
      invalid-feedback='分類必填'
      :state='state.category'
    )
      b-form-select#input-category(
        v-model='form.category'
        required
        :options="categories"
        placeholder='請選擇商品分類'
        :state='state.category'
      )
    b-form-group(
      label='商品說明'
      label-for='input-description'
      description='必填欄位'
      invalid-feedback='說明必填'
      :state='state.description'
    )
      b-form-textarea#input-description(
        v-model='form.description'
        required
        rows="3"
        max-rows="6"
        placeholder='請輸入商品說明'
      )
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
    b-form-group.mt-4(label='上架')
      b-form-radio(v-model='form.sell' :value='true') 上架
      b-form-radio(v-model='form.sell' :value='false') 下架
</template>

<style>
#adminproduct{
  background: $backColor;
}
#adminproduct.content{
    margin-left:260px;
  }
@media screen and (max-width: 992px) {
  #adminproduct.content{
    margin-left:0px;
  }
}
</style>

<script>
export default {
  data () {
    return {
      /* 表格要顯示的東西 */
      fields: [
        { key: 'image', label: '圖片' },
        { key: 'name', label: '名稱' },
        { key: 'price', label: '價格' },
        { key: 'category', label: '分類' },
        { key: 'description', label: '敘述' },
        { key: 'sell', label: '上架' },
        { key: 'action', label: '編輯' }
      ],
      products: [],
      modalSubmitting: false,
      categories: [
        { text: '選擇分類', value: '' },
        '經典鮮花', '蘭花盆景', '鮮花盆花', '綠意盎然'
      ],
      form: {
        name: '',
        price: null,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    }
  },
  computed: {
    state () {
      return {
        /* 對照後端models/products 看哪些是必填的 */
        name: this.form.name.length === 0 ? null : true,
        price: this.form.price === null ? null : this.form.price > 0,
        category: this.form.category.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitModal (event) {
      event.preventDefault()
      /* 先檢查三個必填欄位 */
      if (!this.state.name || !this.state.price || !this.state.category) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.modalSubmitting = true

      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          /* 把東西塞進 formdata */
          fd.append(key, this.form[key])
        }
      }

      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products[this.form.index] = { ...this.form, image: data.result.image }
          /* 更新表格 上面的table */
          this.$refs.table.refresh()
        }
        /* 送出之後把 modal 關掉 */
        this.$bvModal.hide('modal-product')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }

      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        price: 0,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      }
    },
    /* 點'編輯'帶入值及跳出彈跳視窗 */
    editProduct (index) {
      this.form = { ...this.products[index], image: null, index }
      this.$bvModal.show('modal-product')
    }
  },
  /* 建立時抓目前的商品 */
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
