<template>
  <form class="form" @submit.prevent="addTask(title, body)">
    <input type="text" placeholder="Заголовок" v-model="title" />
    <textarea placeholder="задача" v-model="body"></textarea>
    <button class="button" type="submit">Добавить</button>
  </form>
</template>

<style lang="scss">
.form {
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.4);
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  input {
    font-size: 1em;
    padding: 5px;
    border-radius: 5px;
    height: 40px;
  }
  textarea {
    font-size: 1em;
    padding: 5px;
    border-radius: 5px;
    height: 240px;
    resize: none;
  }
}
</style>

<script lang="ts">
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      title: '',
      body: ''
    }
  },

  methods: {
    ...mapMutations(['createTask']),
    addTask (title: string, body: string) {
      if (title && body) {
        this.createTask({
          id: Date.now(),
          title,
          body
        })
      }
    }
  }
}
</script>
