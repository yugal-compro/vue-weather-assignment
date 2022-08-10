<template src="./home-page.html">
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherInfo from '../../components/weather-info/weather-info.vue';
import SearchCity from '../../components/search-city/search-city.vue';

export default {
  name: 'HomePage',
  components: {
    WeatherInfo,
    SearchCity
  },
  computed: {
    ...mapGetters('weatherData', {
      weather: 'getWeatherData'
    }),
    weatherMain() {
      if (this.weather == null) return 'Haze';
      return this.weather.weather[0].main;
    }
  },
  methods: {
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
  created() {
    this.$store.dispatch('weatherData/fetchCitiesData');
    this.getLocation();
  }
};
</script>

<style lang="scss" scoped src="./home-page.scss">
</style>
