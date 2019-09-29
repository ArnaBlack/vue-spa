import * as firebase from 'firebase'

class User {
  constructor(id) {
    this.id = id;
  }
}
export default {
  state: {
      user: null
  },
  actions: {
    registerUser({commit}, {email, password}) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(user => {
         commit('setUser', new User(user.uid));

       })
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}