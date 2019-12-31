import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/pages/Home";
import Contact from "@/components/pages/Contact";
import Skills from "@/components/pages/Skills";
import Portfolio from "@/components/pages/Portfolio";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/skills", name: "Skills", component: Skills },
    { path: "/portfolio", name: "Portfolio", component: Portfolio },
    { path: "*", component: Home }
  ]
});
