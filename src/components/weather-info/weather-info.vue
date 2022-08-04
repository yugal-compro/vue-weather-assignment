<template src="./weather-info.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('weatherData', {
      weather: 'getWeatherData'
    }),
    date() {
      const date = new Date(this.weather.dt * 1000 - (this.weather.timezone * 1000));
      return date.toString().substring(0, 11);
    }
  }
};
</script>

<style lang="scss" scoped src="./weather-info.scss">

</style>
