import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'
import path from 'path'
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from 'unocss/vite'
console.log("process.envvvvvv",process.env)
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    // lib: {
    //   entry:  'package/index.js', // 设置入口文件
    //   name: 'vite-lib', // 起个名字，安装、引入用
    //   fileName: (format) => `vite-lib.${format}.js` // 打包后的文件名
    // },
    // sourcemap: true, // 输出.map文件
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ['vue', 'ant-design-vue'],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       vue: 'Vue'
    //     }
    //   }
    // }
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`, // 设置 `~` 指向 `src` 目录
    }
  },
  plugins: [
    vueJsx({
      transformOn: true
    }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    eslintPlugin({fix:true}),
    styleImport({
      resolves: [ElementPlusResolve()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
      syncIndex: false
    }),
    viteMockServe({
      mockPath: 'mock',
      injectCode: `
        import { setupMockServer } from '../mock';
        setupMockServer();
      `,
    }),
    AutoImport({ 
      imports: ['vue','vue-router','@vueuse/head'] 
    }),
    Unocss({
      // mode : 'shadow-dom'
    })
  ],
  // build:{
  //   target:['edge90','chrome90','firefox90','safari15']
  // },
  // base: process.env.VUE_APP_LOCAL_ENV === "true" ? './' : "/servename/", // 设置打包路径
  // base: './', // 设置打包路径
  server: {
    // host: '0.0.0.0',
    port: 8085, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    https: false,
    cors: true // 允许跨域
  }
})
