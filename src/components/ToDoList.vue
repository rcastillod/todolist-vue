<template>
    <div class="todo__content">
        <p v-if="this.tareas.length == 0" class="todo__notask">Felicitaciones!! No tiene tareas pendientes por hacer &#128079;</p>
        <ul class="todo__list">
            <li v-for="(tarea, index) in tareas" :key="index">
                <label class="todo__check" :class="{ checked: tarea.checked }">
                    <input type="checkbox" v-model="tarea.checked">
                    <span>{{tarea.title}}</span>
                </label>
                <div class="todo__delete" @click="remove(index)">
                    <img width="22" src="../assets/trash.png" alt="Eliminar">
                    <span>Eliminar</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'component-todolist',
    props: {
        tareas: {
            type: Array,
            required: true
        },
        checked: {
            type: Boolean,
            required: true
        }
    },
    data: function(){
        return {

        }
    },
    methods: {
        remove(id) {
            this.$emit('remove', id)
        }
    }
}
</script>

<style scoped>
    .todo__content {
        margin-block-start: 1.25rem;
    }
    .todo__notask {
        font-size: .875rem;
    }
    .todo__list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .todo__list li {
        background-color: hsl(var(--white-color)/.2);
        border-radius: 0.525rem;
        padding: .925rem .625rem;
        overflow: hidden;
        position: relative;
    }
    .todo__check {
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.1;
        display: flex;
        gap: 0.5em;
    }
    .todo__check span {
        position: relative;
        transition: color .3s ease-in-out;
    }
    .todo__check span::after {
        content: '';
        background-color: hsl(var(--primary-color)/.2);
        display: block;
        grid-column: 2;
        position: absolute;
        top: 50%;
        left: 0;
        height: .125rem;
        width: 100%;
        transform: scaleX(0) translateY(-50%);
        transform-origin: 0 0;
        transition: transform .3s ease-in-out;
    }
    .todo__check.checked {
        color: hsl(var(--primary-color)/.2);
    }
    .todo__check.checked span::after {
        transform: scaleX(1) translateY(-50%);
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
    .todo__check input[type="checkbox"]:hover::before {
        transform: scale(1);
    }
    .todo__check input[type="checkbox"]:hover::before,
    .todo__check input[type="checkbox"]:focus::before {
        box-shadow: inset 1em 1em hsl(var(--secondary-color)/.5);
    }
    .todo__list li p {
        margin: 0;
    }
    .todo__delete {
        align-items: center;
        background-color: hsl(var(--white-color));
        border-radius: 0.525rem;
        cursor: pointer;
        display: flex;
        gap: .625rem;
        height: 100%;
        top: 50%;
        right: 0;
        padding-inline: .625rem;
        position: absolute;
        transform: translate(calc(100% + 1px), -50%);
        transition: transform 650ms cubic-bezier(0.79,0.14,0.15,0.86);
        z-index: 2;
    }
    .todo__delete > span {
        color: hsl(var(--remove-color));
        font-weight: 700;
        font-size: .875rem;
        transform: translateX(.625rem);
        transition: transform 650ms cubic-bezier(0.65,0.05,0.36,1);
    }
    .todo__list li:hover .todo__delete {
        transform: translate(60%, -50%);
    }
    .todo__delete:hover {
        transform: translate(0, -50%) !important;
    }
    .todo__delete:hover > span {
        opacity: 1;
        transform: translateX(0);
    }
</style>