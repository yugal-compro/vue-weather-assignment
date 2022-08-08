<template>
<router-view/>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
body{
    height: 100vh;
    padding: 0;
    margin: 0;
    @include media-breakpoint-up(md) {
      background-image: url('../src/assets/background-images/bg.webp');
    }
    background-image: url('https://thumbs.dreamstime.com/b/blue-winter-mobile-phone-wallpaper-rich-saturated-bright-color-tinted-grainy-vertical-background-dark-light-tones-surface-227498195.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(10px);
}
</style>
