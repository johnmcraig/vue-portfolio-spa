<template>
  <div>
    <div class="jumbotron bg-light mb-0 radius-0 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <h1 class="display-4 mb-1">John M. Craig Jr.</h1>
            <span class="lead">
              <i class="fas fa-database"></i> Full-stack Web Developer |
              <i class="fas fa-microchip"></i> Software Developer
            </span>
          </div>
        </div>
      </div>
    </div>

    
      <div class="container py-5">
        <div style="padding: 0.5rem;">
          
            <h2>Hello, and welcome to my site!</h2>
            <p>It isn't much to look at, but it is responsive (using Bootstrap 4.1 &amp; Vue.js), fast, and gets the to the point.</p>
            <p>Use the navigation links to find what you are looking for.</p>
            <p>
              I would suggest if you are looking for my list of projects to use the
              <a class="btn btn-info btn-sm" href="/portfolio">Portfolio</a> page.
            </p>
            <p>Or maybe the tools I use with the <a class="btn btn-info btn-sm" href="/skills">Skills</a> page.</p>
            <p>
              Or if you want to contact me for work or hire, go to the
              <a class="btn btn-info btn-sm" href="/about">About</a> page.
            </p>
          
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 100px);
}
</style>