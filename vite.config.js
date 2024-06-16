import { fileURLToPath, URL } from 'node:url'
import process from 'node:process'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode)

  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    base: env.VITE_BASE || '/',
    server: {
      host: '127.0.0.1',
      port: 3000
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
