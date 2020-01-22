<template>
  <div>
    <div class="jumbotron mb-0 radius-0 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <h1 class="display-4 mb-1">Portfolio Projects</h1>
            <span class="lead">
              A small sample of projects from
              <i class="fab fa-github"></i> Github
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-1 mb-auto py-5">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Employee Management App</h4>
          <hr />
          <p
            class="card-text"
          >A web application as a data entry system to manage a list of employees using form validation, repository pattern, RESTful Api architecture, Api Versioning, and Swagger for endpoint testing. Built with an assortment of the following technologies:</p>
          <ul>
            <li>Angular v8 for the UI</li>
            <li>Asp.Net Core 2.2 for the back-end Api</li>
            <li>PostgreSQL Database</li>
          </ul>

          <a
            class="btn btn-md btn-primary my-1 my-sm-0 card-link"
            href="https://github.com/johnmcraig/employee-list"
          >
            <span class="fab fa-github"></span>
            Go to Github Project Page
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Meeting Finder</h4>
          <hr />
          <p
            class="card-text"
          >A full-stack web application that allows users to schedule meetings, events, or gatherings and update those interested with email alerts. Sort of a Meetup.com alternative. This application demonstrates clean architecture using the single responsibility method via CQRS and Mediator pattern, events updated via SignalR, and a UI built with React. Built with the following:</p>
          <ul>
            <li>React.js 16.5 for the UI</li>
            <li>Asp.Net Core 3.1 for the back-end Api</li>
            <li>PostgreSQL Database</li>
          </ul>
          <a
            class="btn btn-md btn-primary my-1 my-sm-0 card-link"
            href="https://github.com/johnmcraig/meeting-events"
          >
            <span class="fab fa-github"></span>
            Go to Github Project Page
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Blogging Engine</h4>
          <hr />
          <p
            class="card-text"
          >A blog engine as a CMS that implements TinyMC library to render and write text as posts. These posts are stored in a SQL database and displayed by recent date. The following tech was used to create the application:</p>
          <ul>
            <li>ASP.Net Core 2.0</li>
            <li>
              TinyMC Library:
              <a href="https://www.tiny.cloud/">TinyMC website</a>
            </li>
            <li>MS SQL Server</li>
          </ul>
          <a
            class="btn btn-md btn-primary my-1 my-sm-0 card-link"
            href="https://github.com/johnmcraig/blog-engine"
          >
            <span class="fab fa-github"></span>
            Go to Github Project Page
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style scoped>
.card {
  margin: 2rem;
}
</style>