import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from '../config/unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 添加 JSX 插件
    vueJsx(),
    Unocss(),
  ]
})