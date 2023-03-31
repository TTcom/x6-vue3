<template>
  <div class="vModel">
    <el-button @click="changTitle">changetitle</el-button>
    <vModelPonent v-model:title="title"></vModelPonent>
  </div>
</template>
<route>
{
  name: "vModel"
}
</route>
<script setup>
let title = $ref("一个title")
function changTitle() {
  title = "haveChangeTitle"
}
</script>

<style lang="scss" scoped></style>
