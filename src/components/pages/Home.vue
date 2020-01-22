<template>
  <div>
    <div class="jumbotron mb-0 radius-0 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <img
              src="@/assets/profileoutside.jpg"
              class="img-fluid rounded-circle"
              style="display:inline"
              alt
            />
            <h1 class="display-4 mb-1">John M. Craig Jr.</h1>
            <span class="lead">A portfolio site from the developer</span>
          </div>
        </div>
      </div>
    </div>

    <main role="main" class="flex-shrink-0">
      <div class="container mb-auto py-5">
        <h2 class="mt-5">Welcome to my portfolio site!</h2>
        <p class="lead">I'm John, a full stack web developer and software developer.</p>
        <p>
          If you are looking for a list of my projects I would suggest to go to the
          <router-link to="/portfolio" class="btn btn-info btn-sm">Portfolio</router-link> page.
        </p>
        <p>
          If you want to contact me for work, to hire, or discussion then go to the
          <router-link to="/contact" class="btn btn-info btn-sm">Contact</router-link> page.
        </p>
        <p>
          Want to know all the cool technology and tools I use? Then head on over to the
          <router-link to="/skills" class="btn btn-info btn-sm">Technology</router-link> page.
        </p>
      </div>
    </main>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
img {
  display: block;
  max-width: 150px;
  height: auto;
}
/* .jumbotron {
  background-image: url("../../assets/bgimage.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
} */
/* .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 100px);
} */
</style>