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
      // const mediaQuery = window.matchMedia('(max-width: 768px)');
      // if (mediaQuery.matches) {
      //   return 'https://thumbs.dreamstime.com/b/blue-winter-mobile-phone-wallpaper-rich-saturated-bright-color-tinted-grainy-vertical-background-dark-light-tones-surface-227498195.jpg';
      // }
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
      if (weather === 'Haze' || weather === 'Mist') {
        return hazeBg;
      }
      return weatherBg;
    },
    showPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.$store.dispatch('weatherData/fetchCurrentCity', { lat: this.latitude, long: this.longitude });
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.handleError);
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    },
    handleError(error) {
      if (error.code === error.PERMISSION_DENIED) {
        this.$store.dispatch('weatherData/fetchUserLocation');
      }
    }
  },
  computed: {
    ...mapGetters('weatherData', {
      weather: 'getWeatherData'
    })
  },
  created() {
    this.$store.dispatch('weatherData/fetchCitiesData');
    this.getLocation();
  }
};
</script>

<style lang="scss" scoped src="./home-page.scss">
</style>
