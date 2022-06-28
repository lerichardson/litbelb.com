<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">My Projects</router-link> |
      <router-link to="/medium">Blog</router-link>
    </div>
    <div id="911">
      <div class="911-text">
        <h1>Hi</h1>
        <p>
          I write this with a heavy heart. If you didn't know, today's the 20th
          anniversary of the 9/11 attacks. So many people lost their lives, it
          was a sad day. I wasn't alive then, but I know many people who were.
          It was a horrific day. I decided to write this and shut down my
          website for today, as a tribute to the day and those who worked so
          hard to save people's lives. So, to the first responders, I want to
          thank you for your efforts. You saw some horrific things that day, and
          you helped to save lives. That's a noble act. To those who watched as
          the first and second planes hit, I wish you the best. To those who
          survived, I wish you the best. I suggest further reading on some of
          these articles and videos I have picked:
          <br />
          <br />
          <a href="https://humanparts.medium.com/my-plan-on-9-11-17065434385b"
            >On 9/11, All My Plans Went Up In Smoke</a
          >
          (Medium | Human Parts | John DeVore)
          <br />
          <a
            href="https://www.vox.com/22654167/cost-deaths-war-on-terror-afghanistan-iraq-911"
            >20 years, $6 trillion, 900,000 lives</a
          >
          (Vox | Dylan Matthews)
        </p>
      </div>
    </div>
    <router-view />
    <div id="footer">
      <router-link to="/Privacy">Privacy</router-link> |
      <router-link to="/Medium">Writings</router-link> |
      <a href="https://github.com/lerichardson/litbelb.com"
        >Edit this page on GitHub</a
      >
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
  margin-right: 15rem;
  margin-left: 15rem;
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
