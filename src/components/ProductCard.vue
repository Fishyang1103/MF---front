<template lang="pug">
#productCard
  b-card.mt-5(img-top :img-src='product.image')
    b-card-body
      b-card-title.font-weight-bold
        router-link(:to='"/eachproduct/" + product._id') {{ product.name }}
      b-card-sub-title {{ '$' + product.price }}
      //- b-card-text(style='white-space: pre') {{ product.description }}
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
a {
  color:#D95D5E;
}
</style>
