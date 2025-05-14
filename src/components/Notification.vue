<template>
  <div v-if="notify.visible" class="notification">
    {{ notify.message }}
  </div>
</template>

<script setup>
import { notify } from '../store/notify.js'
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2a7a2f;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  z-index: 9999;
  font-weight: bold;
}
</style>
