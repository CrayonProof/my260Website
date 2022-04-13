<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <p>PrintUp</p>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/">
        <div class="menu-item">
          <p>Home</p>
        </div>
      </router-link>
      <router-link to="/printers">
        <div class="menu-item">
          <p>Printers</p>
        </div>
      </router-link>
      <router-link to="/profile">
        <div class="menu-item">
          <p>Profile</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #14203b;
  text-decoration: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  margin: 0rem 2rem 0rem 2rem;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
