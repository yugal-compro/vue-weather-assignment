<template>
<AppHeader />
<router-view/>
<AppFooter />
</template>

<script>
import AppHeader from './components/app-header/app-header.vue';
import AppFooter from './components/app-footer/app-footer.vue';

export default {
  components: { AppFooter, AppHeader }
};
</script>

<style lang="scss">
</style>
