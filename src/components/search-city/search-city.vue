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
      return this.cities.filter(
        (city) => city.toLowerCase().startsWith(this.inputValue.toLowerCase())
      ).slice(0, 10);
    },
    getWeather(event) {
      this.inputValue = '';
      this.$store.dispatch('weatherData/fetchWeatherData', event.target.innerText);
    }
  }
};
</script>

<style lang="scss" scoped src="./search-city.scss">
</style>
