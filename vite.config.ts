/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

// import { presetUno, presetAttributify, presetIcons } from 'unocss'
// import Unocss from 'unocss/vite'
import Unocss from './config/unocss'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // })
    Unocss(),
  ],

  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true, // 在编译的时候是否要独立输出 css
    lib: {
      entry: './src/entry.ts',
      name: 'PiecesUI',
      fileName: 'pieces-ui',
      // 导出模块格式
      formats: ['es', 'cjs', 'umd', 'iife']
    }
  },

  // vitest
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})