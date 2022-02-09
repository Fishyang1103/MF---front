<template lang="pug">
#app
    router-view
</template>
<script>
export default {
  async created () {
    this.$store.dispatch('user/getInfo')
    this.$store.dispatch('user/signInLine')
  }
}

</script>
