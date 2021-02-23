<template>
  <div>
    <!--Home Navbar-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand order-md-last">CRUD VueJs + PostgreSQL + NodeJS</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Novo Médico</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pages/list-doctor"
            >Listar Médicos</router-link
          >
        </li>
      </ul>
    </nav>
    <!--End Navbar-->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
