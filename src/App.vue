<template>
  <nav>
    <router-link to="/"> Home |  </router-link>
    <router-link to="/vuex"> Employee Vuex | </router-link>
    <router-link to="/forms"> Forms </router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 40px;
}
</style>
