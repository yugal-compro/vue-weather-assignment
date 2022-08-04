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
  methods: {
    getImage() {
      if (this.weather == null) {
        return 'https://www.maximum-inc.com/wp-content/uploads/2022/01/Meteorology.jpeg';
      }
      const weather = this.weather.weather[0].main;
      if (weather === 'Clouds') {
        return 'https://www.treehugger.com/thmb/Kc3Gx2Y6SmBJNVZgf0OCoaEZpPQ=/735x0/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__08__CollectionOfCloudsAgainstABlueSky-8cae9f3109d14dcf98d9facc5775222f.jpg';
      }
      if (weather === 'Rain') {
        return 'https://t3.ftcdn.net/jpg/03/19/67/24/360_F_319672457_RgWdAgsS2MzHQRvU5jJWvpyCDwIYr8O9.jpg';
      }
      if (weather === 'Thunderstorm') {
        return 'https://www.thoughtco.com/thmb/VttBsKCr59FG8p9kJKVGMZbjmaE=/2868x2151/smart/filters:no_upscale()/GettyImages-673747736-5b1989c3fa6bcc003614911a.jpg';
      }
      if (weather === 'Drizzle') {
        return 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/drizzle-647_072717054006.jpg?size=770:433';
      }
      if (weather === 'Snow') {
        return 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?cs=srgb&dl=pexels-james-wheeler-1571442.jpg&fm=jpg';
      }
      if (weather === 'Clear') {
        return 'https://outforia.com/wp-content/uploads/2022/01/shutterstock_263027252-1.jpg';
      }
      if (weather === 'Haze') {
        return 'https://media.wired.co.uk/photos/606dba04751ea43ccd9898b5/16:9/w_2560%2Cc_limit/london-heatwave.jpg';
      }
      return 'https://image.cnbcfm.com/api/v1/image/106849039-1614858338482-gettyimages-634465411-dsgf001080.jpeg?v=1614858433';
    }
  },
  computed: {
    ...mapGetters('weatherData', {
      city: 'getCity',
      weather: 'getWeatherData'
    })
  },
  created() {
    this.$store.dispatch('weatherData/fetchCitiesData');
  }
};
</script>

<style lang="scss" scoped src="./home-page.scss">
</style>
