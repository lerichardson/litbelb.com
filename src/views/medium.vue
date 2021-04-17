<template>
  <div>
    <hi />
    <h2>
      I just write on Medium. Click
      <a href="https://litbelb.medium.com">here</a> to go if you aren't
      redirected yet.
    </h2>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import hi from "@/components/hi.vue";

@Component({
  components: {
    hi,
  },
})
export default class Home extends Vue {}
window.location.href = "https://litbelb.medium.com";
</script>