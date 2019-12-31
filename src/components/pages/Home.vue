<template>
  <div>
    <div class="jumbotron jumbotron-fliud bg-light mb-0 radius-0 text-center">
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
      <div class="row" style="padding: 0.5rem;">
        <div class="col-xl-12">
          <h2 class="mb-1" style="text-align: center;">Hello, and welcome to my portfolio site!</h2>
          <p>Hi, I'm John. A full-stack web developer and Software Developer using C#/ASP.Net Core and .Net Core as my prefered stack.</p>
          <p>Use the navigation links to find what you are looking for.</p>
          <p>
            I would suggest if you are looking for my list of projects to use the
            <router-link to="/portfolio" class="btn btn-info btn-sm">Portfolio</router-link> page.
          </p>
          <p>
            Or maybe the tools I use with the
            <router-link to="/skills" class="btn btn-info btn-sm">Technology</router-link> page.
          </p>
          <p>
            Or if you want to contact me for work or hire, go to the
            <router-link to="/contact" class="btn btn-info btn-sm">Contact</router-link> page.
          </p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
p {
  text-align: center;
}
/* .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 100px);
  <img src="/" class="img-responsive img-circle" style="display:inline" alt="" />
} */
</style>