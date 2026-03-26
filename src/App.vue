<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>

</template>

<script setup>
  import Navbar from './components/AppNavbar.vue'
  import Footer from '@/components/Footer.vue'
</script>

<style scoped>
/* en App.vue o global */
  html, body, #app {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
  }

  router-view {
    flex: 1;
  }

</style>