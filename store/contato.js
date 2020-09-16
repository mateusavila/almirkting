export const state = () => ({
  form: {

  }
})

export const mutations = {
  toggleForm (state, form) {
    state.form = form
  }
}

export const actions = {
  queroDinheiro ({ commit }, data) {
    // este é um código apenas para criar um token de mentira.
    console.log("Oi, eu sou a VUEX", data)
    commit('toggleForm', data)
  }
}
