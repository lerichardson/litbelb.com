<template>
  <div class="current-projects">
    <div class="wrapper">
      <a href="https://huelet.net">
        <div class="bg-huelet-color section">
          <div class="huelet">
            <div class="huelet-logo">
              <img
                src="https://cdn.huelet.net/assets/Huelet-Network-logo-2.jpg"
              />
            </div>
            <div class="huelet-text">
              <h2 class="hl">Huelet</h2>
            </div>
          </div>
        </div>
      </a>
      <a href="https://etherealads.co">
        <div class="bg-ethl-color section">
          <div class="ethl">
            <div class="ethl-logo">
              <img src="https://etherealads.co/assets/ethlads-75-75.png" />
            </div>
            <div class="ethl-text">
              <h2 class="eth">Ethereal Ads</h2>
            </div>
          </div>
        </div>
      </a>
      <a href="https://acnhtools.com">
        <div class="bg-acnhtools-color section">
          <div class="acnhtools">
            <div class="acnhtools-logo">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/acnhtools.appspot.com/o/acnhtools.jpg?alt=media&token=a6cb40c7-bcbe-44a7-9bf6-9317a26c9490"
              />
            </div>
            <div class="acnhtools-text">
              <h2 class="act">acnhtools</h2>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<style>
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
.wrapper {
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
}
.section {
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
}
.bg-huelet-color {
  background-color: #181818;
  color: #ffffff;
}
.bg-ethl-color {
  background-color: #28a745;
  color: #000000;
}
.bg-acnhtools-color {
  background-color: mediumseagreen;
  color: #000000;
}
.huelet {
  display: flex;
  flex-direction: row;
}
.ethl {
  display: flex;
  flex-direction: row;
}
.acnhtools {
  display: flex;
  flex-direction: row;
}
.hl {
  font-weight: lighter;
}
.eth {
  font-weight: lighter;
}
.act {
  font-weight: lighter;
}
</style>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Home extends Vue {}
</script>
