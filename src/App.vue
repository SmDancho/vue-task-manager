<template>
  <div id="app">
    <div class="container">
      <nav class="nav">
        <router-link to="/">Главная</router-link>
        <router-link to="/tasks">Задачи</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.container {
  margin: 0 auto;
  width: 1440px;
}
.nav {
  display: flex;
  padding:10px;
  margin:  30px 0;
  gap: 5px;
  border-radius: 15px;
  box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.4);
  a {
    font-size: 18px;
    color: #443d3d;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: #070707;
    }
  }
}

.button {
    width: 140px;
    height: 40px;
    border-radius: 20px;
    border:none;
    background-color: rgb(177, 0, 109);
    font-size: 16px;
    color:#ffffff;
    cursor: pointer;
    &:active {
      background-color: rgb(116, 5, 73);
    }
  }
</style>
