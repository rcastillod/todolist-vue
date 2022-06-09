<template>
    <div class="todo-wrapper">
        <div class="todo__header">
            <div class="todo__title">
                <h3>Daily Todo List</h3>
                <p>Organiza tus tareas diarias</p>
            </div>
            <div class="todo__avatar">
                <img src="https://picsum.photos/id/1012/50" alt="">
            </div>
            <div class="todo__input">
                <input v-model="tarea" type="text" placeholder="Agrega aquí una nueva tarea" aria-label="Nueva tarea">
                <button @click="addTarea">Agregar</button>
            </div>
        </div>
        <div class="todo__content">
            <ul class="todo__list">
                <li v-for="(tarea, index) in tareas" :key="index">
                <label class="todo__check">
                    <input type="checkbox">
                    {{tarea}}
                </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-todolist',
    // props: {},
    data: function(){
        return {
            tarea: '',
            tareas: [],
            checked: false
        }
    },
    methods: {
        addTarea() {
            if ( this.tarea != '' ) {
                this.tareas.push(this.tarea)
                this.tarea = ''
            } else {
                alert('Debes ingresar una tarea para poder agregar!')
            }
        }
    }
}
</script>

<style scoped>
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
    .todo__title > * {
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
        transition: background .3s ease-in-out;
    }
    .todo__input button:hover,
    .todo__input button:focus {
        background-color: hsl(var(--secondary-color));
    }
    .todo__content {
        margin-block-start: 1.25rem;
    }
    .todo__list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .todo__list li {
        background-color: hsl(var(--white-color)/.2);
        border-radius: 0.525rem;
        padding: .625rem;
    }
    .todo__check {
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 0.5em;
    }
    .todo__check input[type="checkbox"] {
        appearance: none;
        background-color: #fff;
        border: 0.15em solid hsl(var(--secondary-color));
        border-radius: .3125em;
        display: grid;
        font: inherit;
        height: 1.15em;
        margin: 0;
        place-items: center;
        width: 1.15em;
        transform: translateY(-0.075em);
    }
    .todo__check input[type="checkbox"]::before {
        box-shadow: inset 1em 1em hsl(var(--secondary-color));
        content: "";
        height: 0.65em;
        width: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
    }
    .todo__check input[type="checkbox"]:checked::before,
    .todo__check input[type="checkbox"]:hover::before,
    .todo__check input[type="checkbox"]:focus::before {
        transform: scale(1);
    }
    .todo__check input[type="checkbox"]:hover::before,
    .todo__check input[type="checkbox"]:focus::before {
        box-shadow: inset 1em 1em hsl(var(--secondary-color)/.5);
    }
    .todo__list li p {
        margin: 0;
    }
</style>