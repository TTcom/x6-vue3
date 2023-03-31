<template>
  <div class="vModelPonent">titleModel:{{ title }}</div>
  <el-button @click="sonChangeTitle">sonChangeTitle</el-button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
})
const emit = defineEmits(["update:title"])
function sonChangeTitle() {
  emit("update:title", "sonChangetitle")
}
</script>

<style lang="scss" scoped></style>
