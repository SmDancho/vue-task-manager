<template>
  <div class="container">
    <TasksForm/>
    <div class="tasks">
      <div class="tasks__card" v-for="tasks in getTasks" v-bind:key="tasks.id">
        <div> <input type="text" v-model="tasks.title"/></div>
        <div> <textarea type="text" v-model="tasks.body"/></div>
        <div class="tasks__btns">
        <button class = 'button button_delete' v-on:click="deleteTasks(tasks.title , tasks.body , tasks.id)">delete</button>
        <button class = 'button'  v-on:click="updateElement(tasks.title , tasks.body)">update</button>
      </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  font-size: 18px;
  &__title {
    margin-top: 20px;
  }
  &__card {
    display: flex;
    flex-direction: column;
    gap:10px;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.4);
    font-size: 1.2em;
  }
  &__btns {
    display: flex;
    gap: 5px;
  }
}
.button_delete {
  background-color:red;
}
input {
   width: 100%;
      font-size: 1em;
      padding: 5px;
      border-radius: 5px;
      height: 40px;
    }
    textarea {
      width: 100%;
      font-size: 1em;
      padding: 5px;
      border-radius: 5px;
      height: auto;
      resize: none;
    }
</style>

<script lang="ts">

import { mapGetters, mapMutations } from 'vuex'
import TasksForm from '../components/TasksForm.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    TasksForm
  },
  computed: mapGetters(['getTasks']),
  methods: {
    ...mapMutations(['deleteElement', 'updateElement', 'getData']),
    deleteTasks (title:string, body:string, id:number) {
      this.deleteElement({
        id: id,
        title: title,
        body: body
      })
    },
    updateTask (title:string, body:string) {
      this.updateElement({
        title: title,
        body: body
      })
    }
  },
  mounted () {
    this.getData()
  }
})
</script>
