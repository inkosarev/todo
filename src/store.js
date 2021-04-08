import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: {}
    },

    mutations: {
        LOAD_TASKS(state, tasks) {
            state.tasks = tasks
        },

        ADD_TASK(state, task) {
            state.tasks[task.id] = task
        },

        DELETE_TASK(state, id) {
            Vue.delete(state.tasks, id)
        },

    },

    actions: {
        // Инициализирует задачи, загружая из хранилища
        loadTasks(context) {
            try {
                let tasks = localStorage.getItem('tasks')
                tasks = JSON.parse(tasks) || {}
                context.commit('LOAD_TASKS', tasks)
            } catch (e) {
                console.error(e)
                localStorage.setItem('tasks', {})
                context.state.tasks = {}
            }
        },

        // Сохраняет задачи в хранилище
        saveTasks(context) {
            const tasks = JSON.stringify(context.state.tasks)
            localStorage.setItem('tasks', tasks)
        },

        // Записывает переданную задачу по ее ключу
        addTask(context, task) {
            context.commit('ADD_TASK', task)
        },

        // Удаляет задачу
        deleteTask(context, id) {
            context.commit('DELETE_TASK', id)
            context.dispatch('saveTasks')
        }
    },
})
