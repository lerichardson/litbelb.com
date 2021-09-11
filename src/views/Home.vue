<template>
  <div class="home">
    <h2 class="nologo">
      Usually there should be a logo here, but I don't have one, so yeahhhh....
    </h2>
    <hi />
    <div class="where-you-can-find-me">
      <h2 class="where">Where you can find me:</h2>
      <div class="places">
        <div class="logos">
          <div class="gh">
            <a href="https://github.com/lerichardson">
              <img
                src="@/assets/GitHub-Mark-64px.png"
                alt="GitHub logo"
                width="64px"
                height="64px"
              />
            </a>
          </div>
          <div class="cdpn">
            <a href="https://codepen.io/lerichardson">
              <img
                src="@/assets/Codepen-Black-Large.png"
                alt="Codepen logo"
                width="64px"
                height="64px"
              />
            </a>
          </div>
          <div class="medium">
            <a href="https://litbelb.medium.com/">
              <img
                src="@/assets/Artboard 1.svg"
                alt="Medium logo"
                width="64px"
                height="64px"
              />
            </a>
          </div>
          <div class="em">
            <a href="mailto:litbelb1@outlook.com">
              <img
                src="@/assets/email.png"
                alt="Email"
                width="64px"
                height="64px"
              />
            </a>
          </div>
          <div class="tw">
            <a href="https://https://twitter.com/Litbelb">
              <img
                src="@/assets/TwitterLogo blue.svg"
                alt="Twitter logo"
                width="64px"
                height="64px"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="my-tweets">
        <a
          class="twitter-timeline"
          data-width="800"
          data-height="1200"
          data-dnt="true"
          href="https://twitter.com/Litbelb?ref_src=twsrc%5Etfw"
          >Tweets by me</a
        >
        <br />
        <a
          href="https://twitter.com/intent/tweet?screen_name=Litbelb&ref_src=twsrc%5Etfw"
          class="twitter-mention-button"
          data-size="large"
          data-dnt="true"
          data-show-count="false"
          >Tweet me</a
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import hi from "@/components/hi.vue";

@Component({
  components: {
    hi,
  },
})
export default class Home extends Vue {}
</script>
<style>
.nologo {
  padding: 200px;
  color: rgb(0, 0, 0);
}
.where-you-can-find-me {
  height: 100%;
  margin-top: 20%;
}
.places {
  padding: 200px;
}
.logos {
  display: flex;
  flex-direction: row;
  margin-right: 50%;
}
</style>
