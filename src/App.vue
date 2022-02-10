<template lang="pug">
#app
    router-view
</template>
<script>
export default {
  async created () {
    // dispatch --> 呼叫 action
    this.$store.dispatch('user/getInfo')
    this.$store.dispatch('user/signInLine')
  }
}

</script>
