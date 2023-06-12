/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-06-11 23:54:36
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-06-12 23:39:32
 * @Description : vite 配置文件
 */
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/web-gis-demos',
})
