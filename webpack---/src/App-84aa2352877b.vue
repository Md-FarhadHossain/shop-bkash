<template>
  <v-app>
    <div id="app" class="root_font" ref="main_app">
      <Loader></Loader>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./assets/styles/main.css";

.v-application a {
  color: transparent;
  text-decoration: none;
}
</style>
