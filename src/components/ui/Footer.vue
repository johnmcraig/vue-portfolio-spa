<template>
  <footer class="container-fluid text-center">
    <div class="row">
      <div class="col-md-6 py-3 text-light">
        <p>&copy; 2020. All rights reserved.</p>
      </div>

      <div class="col-md-6 py-3 text-light">
        <p>
          Created By:
          <a class="text-white" href="https://github.com/johnmcraig">John M. Craig</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  font: inherit;
  font-size: 100%;
  display: flex;
  color: #fff;
  background-color: #303238;
  text-align: center;
  padding: 1rem;
}
.col-md-6 {
  max-width: 50%;
}
.copyright {
  margin-bottom: 0;
}

p {
  margin-top: 0;
}

a {
  color: inherit;
}
</style>