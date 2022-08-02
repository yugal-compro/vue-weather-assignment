import { createStore } from 'vuex';
import weatherData from './modules/weather';

export default createStore({
  modules: {
    weatherData
  }
});
