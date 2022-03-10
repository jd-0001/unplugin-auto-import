import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import AutoImport from '../src/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Inspect(),
    AutoImport({
      resolvers: [
        (name: string) => {
          if (name.includes('Alert')) console.log('name :>> ', name)
        }
      ],
    }),
  ],
})
