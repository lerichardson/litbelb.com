<template>
  <div class="home"></div>
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
