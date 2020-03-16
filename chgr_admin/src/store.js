import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  
  
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    access: localStorage.getItem('access') || '',
    user : {}
  },
  
  mutations: {
      
      auth_request(state){
          state.status = 'loading'
      },
      
      auth_success(state, token, refresh, user){
          state.status = 'success'
          state.token = token
          state.refresh = refresh
          state.user = user
      },
      auth_refresh(state, token, refresh){
          state.status = 'success'
          state.token = token
          state.refresh = refresh
      },
      
      auth_error(state){
          state.status = 'error'
      },
      
      logout(state){
          state.status = ''
          state.token = ''
      },
  },
  
  actions: {
      
      login({commit}, user){
          
        return new Promise((resolve, reject) => {
              console.log(resolve, reject)
              commit('auth_request')
              axios({
                url: 'http://127.0.0.1:8000/api/v1/auth/token/create/',
                data: user,
                method: 'POST' })
            
              .then(resp => {
                  const token = resp.data.data.access
                  const refresh = resp.data.data.refresh
                  const user = resp.data.data.user
                  
                  localStorage.setItem('token', token)
                  localStorage.setItem('refresh', refresh)
                  localStorage.setItem('user', user)
                  
                  axios.defaults.headers.common['Authorization'] = 'Bearer '+ token
                  
                  commit('auth_success', token, refresh, user)
                  resolve(resp)
              })
              .catch(err => {
                  commit('auth_error')
                  localStorage.removeItem('token')
                  reject(err)
              })
        })
      },

      refresh_token({commit}){
          
        return new Promise((resolve, reject) => {
              
              var person_refresh = new FormData();
              
              var refresh = this.state.refresh
              var token = this.state.access
              
              person_refresh.append('refresh', refresh)
              
              console.log(resolve, reject)
              console.log(refresh, token)
              
              commit('auth_refresh')
              
              axios({
                url: 'http://127.0.0.1:8000/api/v1/auth/token/refresh/',
                data: person_refresh,
                method: 'POST' })
            
              .then(resp => {
        
                  const refresh = resp.data.data.refresh
    
                  axios.defaults.headers.common['Authorization'] = 'Bearer '+ token
                  
                  commit('auth_refresh', token, refresh)
                  
                  resolve(resp)
              })
              
              .catch(err => {
                  commit('auth_error')
                  localStorage.removeItem('token')
                  reject(err)
                  this.$store.dispatch("logout")
              })
        })
      },
      
      register({commit}, user){
          
          return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({
                url: 'http://localhost:8000/api/v1/auth/token/create/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: user,
                dataType: 'JSON',
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST'
              })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
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
      logout({commit}){
          return new Promise((resolve, reject) => {
            console.log(resolve, reject)
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
          })
      }
  },
  getters : {
          isLoggedIn: state => !!state.token,
          authStatus: state => state.status,
  }
})
