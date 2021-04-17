<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">My Projects</router-link> |
      <router-link to="/medium">Blog</router-link>
    </div>
    <router-view />
    <div id="footer">
      <router-link to="/Privacy">Privacy</router-link> |
      <router-link to="/Medium">Writings</router-link>
    </div>
  </div>
</template>
<style>
::selection {
  background: #fff200;
}
::-moz-selection {
  background: #fff200;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  background-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(255, 255, 0);
}
#footer {
  padding: 30px;
}

#footer a {
  font-weight: bold;
  color: #2c3e50;
}

#footer a.router-link-exact-active {
  color: rgb(255, 255, 0);
}
</style>
