<template lang="pug">
#sendCard
  p.mt-0 {{ order.userInfo.name}}
    b-card.mt-2.send(img-top :img-src='order.userInfo.image')
      b-card-text(style='white-space: pre') {{ order.userInfo.remark }}
</template>
<style>
#sendCard img{
    height: 280px;
    object-fit: cover;
  }
</style>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>
