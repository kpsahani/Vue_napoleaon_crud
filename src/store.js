import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    status: '',
    resp :'',
    token: localStorage.getItem('token') || '',
    user:{},
    users : [],
    users_creme : [],
    post_users : {},
    postUsers_creme_getres : ''
  },

  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    GET_users (state,users) {
      state.users = users
    },
    GET_users_creme (state,users_creme) {
      state.users_creme = users_creme
    },
    Post_Users_creme_getres(state,resp){
      state.resp = resp
    }
  },

  actions: {

    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        console.log("vishal",user);
        axios.post('http://localhost/napoleon/ws/newapi/login', user)
          .then(resp => {
            console.log("Resp",resp);
            console.log("Dataresp",resp.data);
            console.log("Token",resp.data.Data[0].token);
            const token = resp.data.Data[0].token
            const user = resp.data.Data[0].adminemail
            localStorage.setItem('token', token)
            console.log('localstorage',localStorage.getItem('token'))
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:3000/register', data: user, method: 'POST', 'accept': 'application/json' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    getUsers ({ commit }) {
      axios
        .get('http://localhost/napoleon/ws/newapi/user_view')
        .then(users => {
          console.log("Dataresp1",users.data.data);
        commit('GET_users', users.data.data)
        })
    },
    getUsers_creme ({ commit }) {

      let axiosConfig = {
        headers: {
          
            'X-API-KEY': "75F032F2B4753C9776B61E52010858BB",
            'X-Token' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE1NzgzMTY5NDcsImV4cCI6MTU3ODQwMzM0N30.j5kD141EM12IZfBYx5O2HiYMtYzNnsQGMSLJCbafDjQ"
        }
      };
      let url = 'http://tapsglobalsolutions.com/creme/cicool/api/user/all?limit=50';
      axios.get(url,axiosConfig)
      .then(response => {
          // If request is good...
          console.log(response.data.data.user);
          commit('GET_users_creme', response.data.data.user )
        })
      .catch((error) => {
          console.log('error ' + error);
        });
    },
    postUsers_creme({commit},post_users){

      return new Promise((resolve, reject) => {
        commit('auth_request')
        // console.log("vishal",user);
        let axiosConfig = {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'X-API-KEY': "75F032F2B4753C9776B61E52010858BB",
            'X-Token' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE1NzgzMTY5NDcsImV4cCI6MTU3ODQwMzM0N30.j5kD141EM12IZfBYx5O2HiYMtYzNnsQGMSLJCbafDjQ"
          }
        };
        let url = 'http://tapsglobalsolutions.com/creme/cicool/api/user/add';
        axios.post(url, post_users,axiosConfig)
          .then(resp => {
            console.log("Resp",resp);
            console.log(resp);

            commit('postUsers_creme_getres',resp.data.message)
            // resolve(resp)
          })
          .catch(err => {
            commit('postUsers_creme_getres',resp.data.message)

            // localStorage.removeItem('token')
            reject(err)
          })
      })

    }

  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    // postUsers: state => state.postUsers_creme_getres,
  }
})
