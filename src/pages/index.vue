<template>
  <div class="index w-100% h-100%">
    <div ref="container" class="w-100% h-100%"></div>
  </div>
</template>

<script setup>
import { Graph } from "@antv/x6"
import "@antv/x6-vue3-shape"
import { onMounted } from "vue"
const container = ref(null)
const graph = shallowRef()
onMounted(() => {
  graph.value = new Graph({
    container: container.value,
    panning: true,
    mousewheel: {
      enabled: true,
      modifiers: "Ctrl",
    },
    background: {
      color: "#F2F7FA",
    },
    grid: {
      visible: true,
      type: "doubleMesh",
      args: [
        {
          color: "#eee", // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: "#ddd", // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
  })
  graph.value.addNode({
    id: "node1",
    x: 40,
    y: 40,
    width: 100,
    height: 40,
    shape: "vue3-shape",
    component: {
      template: `<hello-world :name="name"></hello-world>`,
    },
  })
})
// import { demo, demo2 } from "../../dist/vite-lib.es"
// import {TestA} from '../../dist/vite-lib.umd' // 二者
// useHead({
//   title: "index",
//   meta: [{ name: "description", content: "indexpage" }],
// })
// let data = [
//   { text: "前往vue-flow", url: "/pc/vueflow", type: "primary" },
//   { text: "前往移动端H5模板", url: "/phone/godList", type: "" },
//   { text: "前往PC端animation模板", url: "/pc/animation", type: "primary" },
//   { text: "前往PC端motion和swiper模板", url: "/pc/motion", type: "success" },
// ]
// const router = useRouter()
// function toPage() {
//   router.push("item.url")
// }
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
