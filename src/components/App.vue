<template>
  <div id="app">
    <MenuLoja />
    <router-view />

    </div>
</template>

<script>
import MenuLoja from './MenuLoja.vue';


export default {
  name: 'App',
  components: {
    MenuLoja,

  }
}
</script>

<style>



</style>
