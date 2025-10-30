import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 路径别名
import path from "node:path";
// Unocss
import UnoCSS from 'unocss/vite'
// Element-Plus 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // @ 指向 src 目录
    },
  },
})
