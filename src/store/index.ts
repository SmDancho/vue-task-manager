import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
interface Itask{
    id:number;
    title:string;
    body:string;
}

export default new Vuex.Store({
  state: {
    tasks: [] as Itask[]
  },
  getters: {
    getTasks (state) {
      return state.tasks
    }
  },
  mutations: {
    getData (state) {
      const data:Itask[] = JSON.parse(window.localStorage.getItem('tasks') as string)
      if (data.length) {
        state.tasks = data
      } else { state.tasks = [] }
    },
    createTask: (state, task:Itask) => {
      console.log(state.tasks)
      state.tasks.unshift(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteElement: (state, element:Itask) => {
      state.tasks.splice(state.tasks.findIndex(a => a.id === element.id), 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateElement: (state, element:Itask) => {
      const taskToUpdate = state.tasks.find(obj => obj.id === element.id)
      if (taskToUpdate) {
        Object.assign(taskToUpdate, element)
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {}
})
