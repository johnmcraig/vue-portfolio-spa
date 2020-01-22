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
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px;
}
footer {
  /* position: absolute; */
  bottom: 0;
  /* width: 100%; */
  /* Okay  */
  /* height: 60px; */
  /* line-height: 60px; */
}
</style>
