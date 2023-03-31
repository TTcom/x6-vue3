<template>
  <JsxComp />
</template>
<route>
{
  name: "jsx",
  meta: {requiresAuth: false}
}
</route>
<script setup lang="jsx">
const JsxComp = (
  <div className="flex-center mt-20px">
    <span>Render By Jsx</span>
  </div>
)
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
}
</style>
