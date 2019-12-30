<template>
  <footer class="footer">
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-6 py-3 text-light text-center">
            <p>&copy; 2020. All rights reserved.</p>
          </div>

          <div class="col-md-6 py-3 text-light text-center">
            <p>
              Created By:
              <a class="text-white" href="https://github.com/johnmcraig">John M. Craig</a>
            </p>
          </div>
        </div>
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
  border: 0;
  margin-top: 10%;
  line-height: 13.8px;
  position: static;
  font: inherit;
  font-size: 100%;
  z-index: auto;
  display: block;
  float: none;
  box-sizing: border-box;
}

.footer {
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