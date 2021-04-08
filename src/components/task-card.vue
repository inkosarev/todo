<template>
   <div id="task-card" :class="task.status">
       <input class="title" type="text" v-model="task.title" autofocus/>
       <span>
           Создана: {{ new Date(task.created).toLocaleString() }}
       </span>
       <select v-model="task.status">
           <option v-for="status in Object.keys(Task.status)" :key="status">
               {{status}}
           </option>
       </select>
       <textarea v-model="task.description" rows="50"/>

       <button class="btn" @click="saveButtonHandler">Сохранить</button>
       <button class="btn" @click="deleteButtonHandler">Удалить</button>
   </div>
</template>

<script>
import Task from '../task'

export default {
    name: 'task-card',

    data() {
        return {
            // Копирование что бы не изменять хранилище в обход мутаций
            task: {...this.$store.state.tasks[this.$route.params.id]},
            Task
        }
    },

    methods: {
        // Сохранение редактируемой задачи
        async saveButtonHandler() {
            await this.$store.dispatch('addTask', this.task)
            await this.$store.dispatch('saveTasks')
            this.$router.push('/')
        },

        // Удаление редактируемой задачи
        async deleteButtonHandler() {
            await this.$store.dispatch('deleteTask', this.task.id)
            this.$router.push('/')
        }
    }
}
</script>

<style>
    span {
        margin: 20px;
        text-align: center;
        color: var(--light-font);
    }

    textarea {
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

    select {
        margin: 20px 0;
        background: none;
    }

    #task-card {
        border-radius: 50px;
        box-shadow:  20px 20px 60px var(--outer-shadow),
        -20px -20px 60px var(--inner-shadow);
        padding: 30px;
        margin: 20px auto;
        width: 80%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
