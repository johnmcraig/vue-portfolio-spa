<template>
  <div class="col-sm-3 sidenav">
    <h4>John's Portfolio</h4>
    <ul class="nav nav-pills nav-stacked">
      <li class="active">
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/skills">Technology</router-link>
      </li>
      <li>
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
    </ul>
    <br />
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search Blog.." />
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">
          <span class="glyphicon glyphicon-search"></span>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
/* Set gray background color and 100% height */
.sidenav {
  background-color: #f1f1f1;
  height: 100%;
}
/* On small screens, set height to 'auto' for sidenav and grid */
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }
  .row.content {
    height: auto;
  }
}
</style>