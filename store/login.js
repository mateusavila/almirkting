export const state = () => ({
  token: ''
})

export const mutations = {
  toggleToken (state, token) {
    state.token = token
  }
}

export const actions = {
  setToken ({ commit, dispatch }, token) {
    commit('toggleToken', token)
    window.localStorage.setItem('token', token)
  },
  login ({ commit, dispatch }, data) {
    // este é um código apenas para criar um token de mentira.
    if(data.login === 'admin' && data.password === 'admin') {
      dispatch('setToken', 'tokenDeSegurançaDaCIA')
      this.$router.push({ path: '/sucesso' })
    } else {
      window.alert('ERROU')
    }
  },
  logoff ({ dispatch }) {
    const token = localStorage.getItem('token')
    dispatch('setToken', null)
    this.$router.push({ path: '/' })
  }
}
