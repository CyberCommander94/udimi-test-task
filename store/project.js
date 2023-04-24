export const state = () => ({
  currentProject: null,
})

export const mutations = {
  setCurrentProject(state, payload) {
    state.currentProject = payload
  },
}
