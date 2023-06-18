<template>
  <div>
    <div class="container">
      <div class="main">
        <h1 class="main__title">Хватит терять время , начни планировать</h1>
        <div>
          <router-link to="/tasks"><button class="button">Мои задачи</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'mainPage'
})
</script>

<style scoped lang="scss">
.main {
  border-radius: 15px;
  box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.4);
  padding: 20px;
  &__title {
    padding: 10px;
    max-width: 400px;
  }
}
</style>
