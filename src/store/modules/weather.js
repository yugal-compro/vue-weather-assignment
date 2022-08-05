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
      const cities = [];
      for (let i = 0; i < citiesData.length; i += 1) {
        for (let j = 0; j < citiesData[i].cities.length; j += 1) {
          cities.push(`${citiesData[i].cities[j]}, ${citiesData[i].country},${citiesData[i].iso2}`);
        }
      }
      state.cities = cities;
    }
  },
  actions: {
    async fetchWeatherData({ commit }, cityAndCountry) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityAndCountry[0]},${cityAndCountry[2]}&appid=5a884753d54e27765479c5d311582b20&units=metric`);
      const result = response.data;
      commit('updateWeather', result);
    },
    async fetchCitiesData({ commit }) {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
      const result = response.data;
      commit('updateCities', result.data);
    },
    async fetchCurrentCity({ commit }, latAndLong) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLong.lat}&lon=${latAndLong.long}&appid=5a884753d54e27765479c5d311582b20&units=metric`);
      const result = response.data;
      commit('updateWeather', result);
    }
  }
};

export default weatherData;
