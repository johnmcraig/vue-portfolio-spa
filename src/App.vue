<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
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
