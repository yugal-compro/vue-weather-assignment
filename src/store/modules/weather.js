import axios from 'axios';

const weatherData = {
  namespaced: true,
  state: {
    weather: null,
    cities: []
  },
  getters: {
    getWeatherData(state) {
      return state.weather;
    },
    getCities(state) {
      return state.cities;
    }
  },
  mutations: {
    updateWeather(state, weather) {
      state.weather = weather;
    },
    updateCities(state, citiesData) {
      let cities = [];
      for (let i = 0; i < citiesData.length; i += 1) {
        cities = cities.concat(citiesData[i].cities);
      }
      state.cities = cities;
    }
  },
  actions: {
    async fetchWeatherData({ commit }, city) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a884753d54e27765479c5d311582b20&units=metric`);
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
