<template src="./weather-info.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('weatherData', {
      weather: 'getWeatherData'
    })
  }
};
</script>

<style lang="scss" scoped src="./weather-info.scss">

</style>
