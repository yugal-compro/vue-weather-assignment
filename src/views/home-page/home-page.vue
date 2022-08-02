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
  ...mapGetters('weatherData', {
    city: 'getCity'
  }),
  created() {
    this.$store.dispatch('weatherData/fetchCitiesData');
  }
};
</script>

<style lang="scss" scoped src="./home-page.scss">
</style>
