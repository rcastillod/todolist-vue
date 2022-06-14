<template>
  <div id="app">
    <div class="todo-wrapper">
        <div class="todo__header">
            <div class="todo__title">
                <h3>Daily Todo List</h3>
                <p>Organiza tus tareas diarias</p>
            </div>
            <div class="todo__avatar">
                <img src="../src/assets/task.png" alt="Todo">
            </div>
            <div class="todo__input">
                <input v-model="tarea" type="text" placeholder="Agrega aquí una nueva tarea" aria-label="Nueva tarea" ref="tarea">
                <button @click="addTarea">Agregar</button>
            </div>
        </div>
        <ToDoList 
          :tareas="tareas"
          :checked="checked"
          @remove="removeTask"
          ></ToDoList>
    </div>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  data: function() {
    return {
      tarea: '',
      tareas: [],
      checked: false,
    }
  },
  methods: {
    addTarea() {
        if ( this.tarea != '' ) {
            this.tareas.push({
                title: this.tarea,
                checked: false
            })
            this.tarea = ''
            this.$refs.tarea.focus()
        } else {
            alert('Debes ingresar una tarea para poder agregar!')
        }
    },
    removeTask(event) {
      let id = event
      let index = this.tareas.findIndex(tarea => tarea.id == id)
      this.tareas.splice(index, 1)
    }
  },
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
  --complete-color: 159 99% 35%;
  --remove-color: 353 68% 47%;
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
.todo-wrapper {
  background-color: hsl(var(--white-color)/.2);
  backdrop-filter: blur(10px);
  border-radius: 1.25rem;
  margin-inline: auto;
  padding: 1.875rem;
  width: min(100% - 2rem, 25rem);
}

.todo__header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: .9375rem;
}

.todo__title>* {
  margin: 0;
}

.todo__title h3 {
  font-size: 1.75rem;
  font-weight: 900;
}

.todo__avatar {
  border: 2px solid hsl(var(--white-color));
  border-radius: 50%;
  height: 3.125rem;
  overflow: hidden;
  width: 3.125rem;
}

.todo__avatar img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.todo__input {
  display: flex;
  flex-grow: 1;
  gap: 1.25rem;
}

.todo__input input {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid hsl(var(--white-color));
  color: hsl(var(--white-color));
  flex-grow: 1;
  padding: 0.625rem;
}

.todo__input input:focus {
  outline: none;
}

.todo__input input::placeholder {
  color: hsl(var(--white-color));
}

.todo__input button {
  background-color: hsl(var(--primary-color));
  border: 0;
  border-radius: .3125rem;
  color: hsl(var(--white-color));
  cursor: pointer;
  padding: .625rem;
  transition: background 650ms ease-in-out;
}

.todo__input button:hover,
.todo__input button:focus {
  background-color: hsl(var(--secondary-color));
}
</style>
