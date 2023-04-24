export const state = () => ({
  isEditProjectDialogOpened: false,
})

export const mutations = {
  setEditProjectDialogState(state, payload) {
    state.isEditProjectDialogOpened = payload
  },
}
