<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 class="text-red-500 text-4xl font-normal">
    {{ msg }}
  </h1>
  <div>abc</div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
  </p>
  <div class="card">
    <a href="https://v3.vuejs.org/" target="_blank" class="link">Vue 3 Documentation</a>
  </div>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

</template>

<style scoped>
</style>