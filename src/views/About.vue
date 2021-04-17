/* eslint-disable */
<template>
  <div class="about">
    <h1>Me</h1>
    <h2>
      I'm a <del>totally not 12</del><ins>13</ins> year old web developer that
      washes cars to earn money to make websites and CLIs during school.
    </h2>
    <whatibelievein />
  </div>
</template>
<style>
.about {
  height: 100%;
  background-color: rgb(255, 255, 255);
}
ins,
del {
  text-decoration: none;
  display: inline-block;
  padding: 0 0.3em;
}
ins {
  background: #83d5a8;
  height: auto;
  border-radius: 0.3em;
  display: inline;
  -webkit-box-decoration-break: clone;
  -o-box-decoration-break: clone;
  box-decoration-break: clone;
  margin-left: 0.07em;
  margin-right: 0.07em;
}
del {
  background: rgba(231, 76, 60, 0.5);
  cursor: no-drop;
  position: relative;
  top: 0.2em;
  height: 1.31em;
  width: 0.4em;
  line-height: 1.35;
  overflow: hidden;
  color: transparent;
  margin: -0.4em 0.07em -0.05em 0.07em;
  padding: 0 0 0.1em 0;
  -webkit-box-decoration-break: clone;
  -o-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 0.3em;
  transition: padding-left ease 0.3s, padding-right ease 0.3s, color ease 0.15s;
}
del:hover {
  width: auto;
  color: #962e22;
  display: inline;
  padding: 0 0.35em 0em 0.35em;
  line-height: unset;
  position: unset;
  top: unset;
  height: unset;
  transition: padding-left ease 0.3s, padding-right ease 0.3s, color ease 0.7s;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import whatibelievein from "@/components/whatibelievein.vue";

@Component({
  components: {
    whatibelievein,
  },
})
export default class Home extends Vue {}
</script>
