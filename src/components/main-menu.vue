<template>
   <div id="menu">
       <h1>Список очень важных дел</h1>
       <task-preview
           v-for="task in $store.state.tasks"
           :key="task.id"
           :task="task"
       />
       <button class="btn" @click="addHandler">Add</button>
   </div>
</template>

<script>
import Task from '../task'
import TaskPreview from '../components/task-preview.vue'
export default {
    name: 'main-menu',

    components: {
        TaskPreview
    },

    methods: {
        async addHandler() {
            const task = new Task()
            await this.$store.dispatch('addTask', task)
            this.$router.push(`/task/${task.id}`)
        }
    }
}
</script>

<style>
    #menu {
        padding: 50px;
    }

    .date-time {
        font-size: 12px;
        color: var(--light-font);
    }

    .newly {
        background-color: #ffd6cf;
    }

    .inProgress {
        background-color: #c1eefc;
    }

    .done {
        background-color: #bdeab8;
    }
</style>
