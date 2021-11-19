
import { createStore } from 'framework7';

const store = createStore({
  state: {
    signInUrl : "http://localhost:8000/v1/auth/login/",
    signUpUrl: "http://localhost:8000/v1/auth/register/",
    accessToken: "",
    userInfo: {}
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
