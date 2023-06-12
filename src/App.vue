<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-06-11 23:54:36
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-06-12 23:39:41
 * @Description : 
-->
<script setup lang="ts">

import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(100)
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
