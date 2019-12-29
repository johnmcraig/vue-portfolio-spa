<template>
  <footer class="navbar navbar-expand-lg fixed-bottom bg-dark pt-4 text-center">
    <div class="container">
      <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
          <h5 class="mb-1">GitHub</h5>
        </li>
        <li>
          <a href="#" class="btn btn-outline-white btn-rounded">Demo!</a>
        </li>
      </ul>
    </div>

    <div class="footer-copyright text-center py-3">
      &copy; 2020 Copyright:
      <a href>John M. Craig</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style>
footer {
  bottom: 0;
  width: 100%;
  color: #fff;
}
</style>