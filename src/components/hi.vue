<template>
  <div class="hi">
    <particles-bg type="cobweb" :bg="true" color="#000000" />
    <div class="hi-panel">
      <h1 class="hi-im-litbelb">
        Hi! I'm <strong class="lit">Litbelb.</strong>
      </h1>
      <h2 class="sometimes-i-pretend">
        Sometimes, I pretend that I'm good at web dev. It usually doesn't work.
      </h2>
    </div>
  </div>
</template>
<style>
.hi-panel {
  box-shadow: 0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22),
    0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18);
  background-color: rgba(180, 180, 180, 1);
}
.hi-im-litbelb {
  color: white;
  font-weight: lighter;
}
.lit {
  color: rgb(255, 255, 0);
}
</style>
<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "App",
  components: {
    ParticlesBg,
  },
  metaInfo: {
    title: `Hi, I'm Levi!`,
  },
};
</script>
