<template>
  <div class="myaboutImge">
    <img :src="src" class="good_img" />
  </div>
</template>

<script setup>
let { src } = defineProps({
  src: {
    type: String,
    default: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2271279753/O1CN015jXnAT2LuvZR2fQlc_!!2271279753.jpg_430x430q90.jpg",
  },
})
</script>

<style lang="scss">
.myaboutImge {
  transition: all 0.8s;
  width: 100%;
  height: 100%;
}
.good_img {
  width: 100%;
  height: 100%;
}
</style>
