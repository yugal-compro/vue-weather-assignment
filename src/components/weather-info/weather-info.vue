<template src="./weather-info.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    name: 'WeatherInfo',
    ...mapGetters('weatherData', {
      weather: 'getWeatherData'
    }),
    date() {
      const date = new Date(this.weather.dt * 1000 - (this.weather.timezone * 1000));
      const currentTime = date;
      const currentOffset = currentTime.getTimezoneOffset();
      const ISTOffset = 330;
      const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
      let hoursIST = ISTTime.getHours() + 5;
      let minutesIST = ISTTime.getMinutes() + 30;
      if (minutesIST > 60) {
        minutesIST -= 60;
        hoursIST += 1;
      }
      if (hoursIST === 24) {
        hoursIST = 0;
      }
      if (hoursIST < 10) {
        hoursIST = `0${hoursIST}`;
      }
      if (minutesIST < 10) {
        minutesIST = `0${minutesIST}`;
      }
      return `${hoursIST}:${minutesIST} - ${date.toString().substring(0, 3)} ${date.toString().substring(8, 10)} ${date.toString().substring(4, 7)} ${date.getFullYear()}`;
    }
  }
};
</script>

<style lang="scss" scoped src="./weather-info.scss">

</style>
