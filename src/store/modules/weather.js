import axios from 'axios';

const weatherData = {
  namespaced: true,
  state: {
    weather: null,
    countries: [],
    cities: [],
    city: 'kabul'
  },
  getters: {
    getCity(state) {
      return state.city;
    },
    getWeatherData(state) {
      return state.weather;
    },
    getCountries(state) {
      return state.countries;
    },
    getCities(state) {
      return state.cities;
    }
  },
  mutations: {
    updateCity(state, city) {
      state.city = city;
    },
    updateWeather(state, weather) {
      state.weather = weather;
    },
    updateCities(state, citiesData) {
      const countries = [];
      const cities = [];
      for (let i = 0; i < citiesData.length; i += 1) {
        const { country } = citiesData[i];
        countries.push(country);
        cities.push({
          country,
          cities: citiesData[i].cities
        });
      }
      state.countries = countries;
      state.cities = cities;
    }
  },
  actions: {
    async fetchWeatherData({ commit }, city) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a884753d54e27765479c5d311582b20`);
      const result = response.data;
      commit('updateWeather', result);
    },
    async fetchCitiesData({ commit }) {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
      const result = response.data;
      commit('updateCities', result.data);
    }
  }
};

export default weatherData;
