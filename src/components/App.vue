<template>
  <div>

    <nav class="d-flex my-4">
      <router-link to="/">Home</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/employee">Employee List</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/somepage">Secret</router-link>
    </nav>

    <router-view/>
  </div>
</template>
