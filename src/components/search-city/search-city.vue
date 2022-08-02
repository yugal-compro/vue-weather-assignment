<template src="./search-city.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchCity',
  data() {
    return {
      inputValue: '',
      selectedCountry: 'Afghanistan',
      selectedCountryCities: [],
      selectedCity: ''
    };
  },
  computed: {
    ...mapGetters('weatherData', {
      cities: 'getCities',
      countries: 'getCountries',
      city: 'getCity'
    })
  },
  methods: {
    filteredList() {
      return this.selectedCountryCities.filter(
        (city) => city.toLowerCase().startsWith(this.inputValue.toLowerCase())
      ).slice(0, 10);
    },
    getWeather(e) {
      console.log(e);
      this.$store.commit('weatherData/updateCity', this.selectedCity);
      this.$store.dispatch('weatherData/fetchWeatherData', this.city);
    }
  },
  updated() {
    const requiredObject = this.cities.find((elem) => elem.country === this.selectedCountry);
    this.selectedCountryCities = requiredObject.cities;
  }
};
</script>

<style lang="scss" scoped src="./search-city.scss">
</style>
