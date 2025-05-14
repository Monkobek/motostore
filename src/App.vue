<template>
  <div id="app" class="layout background">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
     <Notification />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Notification from './components/Notification.vue'
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
.background {
  background: url('/images/bg.jpg') no-repeat center center fixed;
  background-size: cover;
   z-index: -1; 
     background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
}
</style>