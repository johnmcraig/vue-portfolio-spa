<template>
  <footer class="footer mt-auto py-3 bg-dark pt-4 text-light">
  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5">
    <!-- Grid row -->
    <div class="row mt-3">
      <!-- Grid column -->
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <!-- Content -->
        <h6 class="text-uppercase font-weight-bold">Developer Solutions</h6>
        <hr
          class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style="width: 60px;"
        />
        <p>
          A portfolio site to showcase the skills and technology of a professional web and software developer.
        </p>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Navigation</h6>
        <hr
          class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style="width: 60px;"
        />
        <p>
          <router-link to="/portfolio" class="text-light">Portfolio</router-link>
        </p>
        <p>
          <router-link to="/technology" class="text-light">Technology</router-link>
        </p>
        <!-- <p>
          <router-link to="/portfolio">Portfolio</router-link>
        </p>
        <p>
          <router-link to="/portfolio">Portfolio</router-link>
        </p> -->
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr
          class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style="width: 60px;"
        />
        <p>
          <i class="fab fa-github"></i>
          <a href="https://github.com/johnmcraig" class="text-light"> Github</a>
        </p>
        <!-- <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p> -->
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr
          class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style="width: 60px;"
        />
        <p><i class="fas fa-home mr-3"></i> Atlanta, GA, US</p>
        <p><i class="fas fa-envelope mr-3"></i> jmcraig32884@gmail.com</p>
        <!-- <p><i class="fas fa-phone mr-3"></i> + 01 678 245 9657</p> -->
        <!-- <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p> -->
      </div>
      <!-- Grid column -->
    </div>
    <!-- Grid row -->
  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="text-center py-3">
    © 2020 Copyright:
    <a href="https://johnmcraig.github.io" class="text-light"> John M. Craig</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
/* .footer > .container {
  padding-right: 15px;
  padding-left: 15px;
} */
/* .col-md-6 {
  max-width: 50%;
}
p {
  margin-top: 0;
}
a {
  color: inherit;
} */
</style>