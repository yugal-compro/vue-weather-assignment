<template src="./home-page.html">
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherInfo from '../../components/weather-info/weather-info.vue';
import SearchCity from '../../components/search-city/search-city.vue';
import cloudBg from '../../assets/background-images/clouds-bg.jpg';
import snowBg from '../../assets/background-images/snow-bg.jpg';
import rainBg from '../../assets/background-images/rain-bg.jpg';
import hazeBg from '../../assets/background-images/haze-bg.jpg';
import weatherBg from '../../assets/background-images/weather-bg.jpg';
import thunderstormBg from '../../assets/background-images/thunderstorm-bg.jpg';
import clearSkyBg from '../../assets/background-images/clearsky-bg.jpg';

export default {
  name: 'HomePage',
  components: {
    WeatherInfo,
    SearchCity
  },
  methods: {
    getImage() {
      if (this.weather == null) {
        return weatherBg;
      }
      const weather = this.weather.weather[0].main;
      if (weather === 'Clouds') {
        return cloudBg;
      }
      if (weather === 'Rain') {
        return rainBg;
      }
      if (weather === 'Thunderstorm') {
        return thunderstormBg;
      }
      if (weather === 'Drizzle') {
        return rainBg;
      }
      if (weather === 'Snow') {
        return snowBg;
      }
      if (weather === 'Clear') {
        return clearSkyBg;
      }
      if (weather === 'Haze') {
        return hazeBg;
      }
      return weatherBg;
    }
  },
  computed: {
    ...mapGetters('weatherData', {
      city: 'getCity',
      weather: 'getWeatherData'
    })
  },
  beforeMount() {
    console.log('Loading....');
  },
  created() {
    this.$store.dispatch('weatherData/fetchCitiesData');
  }
};
</script>

<style lang="scss" scoped src="./home-page.scss">
</style>
