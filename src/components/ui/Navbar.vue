<template>
  <div class="bg-primary navbar-dark text-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg px-0 navbar-dark">
        <a class="navbar-brand" href="/"><span class="fas fa-home"></span> Home</a>

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
              <a href="/about" class="nav-link text-white"><span class="fas fa-address-book"></span> About</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/skills" class="nav-link text-white"><span class="fas fa-terminal"></span> Skills</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/portfolio" class="nav-link text-white"><span class="fas fa-briefcase"></span> Portfolio</a>
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