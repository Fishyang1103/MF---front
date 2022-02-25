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
    template(#cell(deliveryDate)='data')
      | {{ data.item.userInfo.deliveryDate}}
    template(#cell(deliveryTime)='data')
      | {{ data.item.userInfo.deliveryTime}}
    template(#cell(date)='data')
      | {{ new Date(data.item.date).toLocaleString('zh-tw') }}
    template(#cell(products)='data')
      ul
        li(v-for='product in data.item.products' :key='product._id') {{ product.product.name }} x {{ product.quantity }}
    template(#cell(remark)='data')
      | {{ data.item.userInfo.remark}}
    template(#cell(form.state)='data')
      |
      b-form-group.mt-4(label='訂單狀態')
          b-form-radio(v-model='form.state' :options='options') 已出貨
          b-form-radio(v-model='form.state' :options='options' ) 已聯絡
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      fields: [
        { key: '_id', label: '單號' },
        { key: 'name', label: '姓名' },
        { key: 'phone', label: '電話' },
        { key: 'address', label: '地址' },
        { key: 'courier', label: '運送' },
        { key: 'deliveryDate', label: '日期' },
        { key: 'deliveryTime', label: '時間' },
        // { key: 'user', label: '使用者' },
        { key: 'date', label: '訂購日' },
        { key: 'products', label: '商品' },
        { key: 'remark', label: '備註' },
        { key: 'state', label: '訂單狀況' }
      ],
      options: [
        { text: '還沒處理', value: '123' },
        { text: '12', value: '34' }
      ],
      form: {
        state: ''
      }
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
  margin-left:20%;
}
</style>
