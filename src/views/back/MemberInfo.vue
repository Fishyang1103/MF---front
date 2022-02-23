<template lang="pug">
#memberinfo
  b-container
    div
      b-form(@submit='onSubmit' @reset='onReset')
        b-form-group#input-group-1(label='Email address:' label-for='input-1' description='Well never share your email with anyone else.')
          b-form-input#input-1(v-model='form.phone' type='email' placeholder='Enter email' required)
        b-form-group#input-group-2(label='Your Name:' label-for='input-2')
          b-form-input#input-2(v-model='form.name' placeholder='Enter name' required)
        b-form-group#input-group-3(label='Food:' label-for='input-3')
          b-form-select#input-3(v-model='form.remark' :options='foods' required)
        b-form-group#input-group-4(v-slot='{ ariaDescribedby }')
          b-form-checkbox-group#checkboxes-4(v-model='form.checked')
            b-form-checkbox(value='me') Check me out
            b-form-checkbox(value='that') Check that out
        b-button(type='submit' variant='primary') Submit
        b-button(type='reset' variant='danger') Reset
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        phone: '',
        address: '',
        remark: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.phone = ''
      this.form.name = ''
      this.form.address = ''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      // this.show = false
      this.$nextTick(() => {
        // this.show = true
      })
    }
  }
}
</script>
