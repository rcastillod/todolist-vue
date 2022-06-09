<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
:root {
  --primary-color: 244 89% 4%;
  --secondary-color: 184 100% 34%;
  --white-color: 0 0% 100%;
}
body {
  background-image: linear-gradient(to bottom, hsl(var(--secondary-color)) , hsl(var(--primary-color)));
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsl(var(--white-color));
  display: grid;
  height: 100%;
  place-items: center;
}
</style>
