<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  height: 100%;
}
html,
body {
  height: 100%;
  width: 100%;
}
</style>
