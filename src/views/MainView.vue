<template>
<div>
  <MainPage/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainPage from '../components/MainPage.vue'

export default Vue.extend({
  name: 'mainView',
  components: {
    MainPage
  }
})
</script>
