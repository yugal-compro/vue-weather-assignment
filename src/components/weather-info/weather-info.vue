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
      const date = new Date(this.weather.dt * 1000 - (this.weather.timezone * 1000)).toString();
      return date;
    }
  },
  methods: {
    getIcon(code) {
      return `http://openweathermap.org/img/w/${code}.png`;
    }
  }
};
</script>

<style lang="scss" scoped src="./weather-info.scss">

</style>
