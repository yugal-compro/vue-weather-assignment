<template src="./search-city.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchCity',
  data() {
    return {
      inputValue: ''
    };
  },
  computed: {
    ...mapGetters('weatherData', {
      cities: 'getCities'
    })
  },
  methods: {
    filteredList() {
      const cities = this.cities.map(
        (city) => city.slice(0, -3)
      );
      const filteredCities = cities.filter(
        (city) => city.toLowerCase().startsWith(this.inputValue.toLowerCase())
      ).slice(0, 10);

      const filteredCitiesIncludes = cities.filter(
        (city) => city.toLowerCase().includes(this.inputValue.toLowerCase())
      ).slice(0, 10);

      for (let i = 0; i < 10; i += 1) {
        if (!filteredCities.includes(filteredCitiesIncludes[i])) {
          filteredCities.push(filteredCitiesIncludes[i]);
        }
      }
      return filteredCities.slice(0, 10);
    },
    getWeather(event) {
      this.inputValue = '';
      const cityAndCountry = event.target.innerText.split(',');
      this.$store.dispatch('weatherData/fetchWeatherData', cityAndCountry);
    }
  }
};
</script>

<style lang="scss" scoped src="./search-city.scss">
</style>
