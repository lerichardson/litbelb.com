<template>
  <div class="what-i-believe-in">
    <h2 class="top-text">What I believe in:</h2>
    <h2 class="privacy-head">Privacy</h2>
    <div class="privacy">
      <div class="padlock">
        <img
          src="@/assets/lock.svg"
          alt="padlock icon to represent privacy"
          width="512px"
          height="512px"
        />
      </div>
      <div class="privacy-text">
        <h2 class="pr-tx">
          I believe that privacy is a human right. It's the most fundamental
          ingredient to<br />
          security and peace of mind. Don't think privacy matters?<br />Then why
          don't you
          <a
            href="https://github.com/cryptoseb/CryptoPaper#let-me-explain-further"
            >permanantly keep your blinds open!</a
          >
        </h2>
      </div>
    </div>
    <h2 class="g-o-head">The Great Outdoors</h2>
    <div class="great-outdoors">
      <h2 class="g-o-tx">
        There's really nothing like a hike in the woods, or a camping trip for
        the week to calm you down, and forget about all of your problems.
      </h2>
      <div class="trees">
        <img
          src="@/assets/trees.svg"
          alt="tree icon to represent going outside"
          width="512px"
          height="512px"
        />
      </div>
    </div>
  </div>
</template>
<style>
.top-text {
  font-weight: lighter;
}
.privacy {
  display: flex;
  flex-direction: row;
}
.privacy-head {
  padding: 15px;
}
.g-o-head {
  padding: 15px;
  text-align: center;
}
.pr-tx {
  font-weight: lighter;
}
.g-o-tx {
  font-weight: lighter;
}
.great-outdoors {
  display: flex;
}
</style>
<script lang="ts">
/* eslint-disable */
export default {
  name: "whatibelievein",
  metaInfo: {
      title: 'About Me'
    }
};
    
</script>