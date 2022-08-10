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
    },
    async fetchUserLocation({ commit }) {
      const getIp = await axios.get('https://api.ipify.org?format=json');
      const ipAddress = getIp.data.ip;
      const getLatAndLong = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_aAwN722PKlEy3SlQV1gFpzZcY43Xc&ipAddress=${ipAddress}`);
      const latAndLong = [getLatAndLong.data.location.lat, getLatAndLong.data.location.lng];
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLong[0]}&lon=${latAndLong[1]}&appid=5a884753d54e27765479c5d311582b20&units=metric`);
      const result = response.data;
      commit('updateWeather', result);
    }
  }
};

export default weatherData;
