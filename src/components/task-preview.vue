<template>
    <div class="task-preview" :class="task.status">
        <h1 class="title">{{task.title}}</h1>
        <span class="date-time">{{ new Date(task.created).toLocaleString() }}</span>
        <p class="description">{{task.description}}</p>
        <router-link class="btn" :to='`/task/${task.id}`'>Изменить</router-link>
        <button class="btn" @click="deleteHandler">Удалить</button>
    </div>
</template>

<script>
import Task from '../task'

export default {
    name: "task-preview",
    props: ['task'],

    data() {
        return { Task }
    },

    methods: {
        deleteHandler() {
            this.$store.dispatch('deleteTask', this.task.id)
        }
    }
}
</script>

<style>
    .task-preview {
        border-radius: 50px;
        background-color: var(--light-blue);
        box-shadow:  20px 20px 60px var(--outer-shadow),
        -20px -20px 60px var(--inner-shadow);
        padding: 30px;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .btn-card {
        display: inline-block;
        border-radius: 5px;
        margin: 5px;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        color: var(--bold-font);
        border: 1px solid gray;
        width: 100px;
        height: 25px;
        line-height: 25px;
        background: linear-gradient(145deg, #f0f0f0, #cacaca);
        font-size: 14px;
        text-align: center;
    }

    .description {
        border-radius: 25px;
        background-color: var(--light-blue);
        box-shadow: inset 5px 5px 20px var(--outer-shadow),
        inset -5px -5px 20px var(--inner-shadow);
        padding: 30px;
        outline: none;
        border: none;
        resize: none;
        font-size: 18px;
    }


</style>
