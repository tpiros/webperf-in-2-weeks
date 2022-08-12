<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="container h-100" id="app">
    <nav class="navbar navbar-expand fixed-top navbar-light bg-light">
      <a class="navbar-brand" href="/">Watersports Mag</a>
      <div class="navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/article">Article</RouterLink>
        </ul>
      </div>
    </nav>
    <div class="row h-100 justify-content-center align-items-center">
      <RouterView />
    </div>
  </div>
</template>

<style>
.navbar-nav li:hover,
.navbar-nav li.router-link-active,
.navbar-nav li.router-link-exact-active {
  cursor: pointer;
}
</style>
