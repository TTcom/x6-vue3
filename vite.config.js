import path from 'path'
import { defineConfig,loadEnv } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import ViteRequireContext from "@originjs/vite-plugin-require-context";
import Unocss from 'unocss/vite'
const config = defineConfig({
  build: {
    lib: {
      entry:  'packages/index.js', // 设置入口文件
      name: 'vite-lib', // 起个名字，安装、引入用
      fileName: (format) => `vite-lib.${format}.js` // 打包后的文件名
    },
    terserOptions: {
      compress: {
          drop_console: true,
          drop_debugger: true,
      },
    },
    target:['edge90','chrome90','firefox90','safari15'],
    cssCodeSplit: true, // 输出.map文件
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      output: {
        // 资源文件名 css 图片等等
        assetFileNames: 'assets/[name].[ext]',
      },
    }
  },
  // base: './', // 设置打包路径
  resolve: {

    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
      '@antv/x6/lib/util/': `@antv/x6/es/util/`,
      // "~": `${path.resolve(__dirname, 'node_modules/')}`,
      vue: "vue/dist/vue.esm.js",
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    dedupe: ['vue-demi'],
  },
  // build: {
  //   minify: true
  // },
  define: { 'process.env': process.env },
  plugins: [
    Vue2({
      jsx: true
    }),
    ViteRequireContext(),
    ScriptSetup(),
    Unocss({
      // mode : 'shadow-dom'
    })
  ],
  optimizeDeps: {
    exclude: ['@antv/x6-vue-shape',"@antv/x6"],
    include: ['mousetrap',"jquery","jquery-mousewheel"],
  }
})
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env };
  console.log("bbbbbbbbbbbbb",process.env)
  return config
};

