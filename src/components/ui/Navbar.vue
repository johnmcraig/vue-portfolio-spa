<template>
  <div class="bg-primary navbar-dark text-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg px-0 navbar-dark">
        <router-link to="/" class="navbar-brand"><span class="fas fa-home"></span> Home</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/contact" class="nav-link text-white"><span class="fas fa-address-book"></span> Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/skills" class="nav-link text-white"><span class="fas fa-terminal"></span> Technology</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link text-white"><span class="fas fa-briefcase"></span> Portfolio</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>