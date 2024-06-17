/*
 * App store
 * */

const state = {
    theme: 'normal'
}

const mutations = {
    SET_THEME(state, theme) {
        state.theme = theme
    }
}

const actions = {
    setTheme({ commit }, theme) {
        commit('SET_THEME', theme)
        document.documentElement.className = theme
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
