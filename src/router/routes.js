import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Skills from "@/components/pages/Skills";
import Portfolio from "@/components/pages/Portfolio";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/skills", name: "Skills", component: Skills },
    { path: "/portfolio", name: "Portfolio", component: Portfolio },
    { path: "*", component: Home }
  ]
});
