import { getAuthToken } from '@/services/utils'

export const state = () => ({
  projects: [],
  currentProject: null,
  isEditingFailed: false,
})

export const mutations = {
  setProjectslist(state, payload) {
    state.projects = payload
  },
  setCurrentProject(state, payload) {
    state.currentProject = payload
  },
  setEditingStatus(state, payload) {
    state.isEditingFailed = payload
  },
}

export const actions = {
  async getProjectsList({ commit }) {
    const response = await this.$axios.$get('projects-manage/index', {
      headers: {
        'Content-type':
          'multipart/form-data',
        Authorization: getAuthToken(this),
      },
    })
    commit('setProjectslist', response.projects)
  },

  async handleEditProject({ commit, state }, payload) {
    try {
      await this.$axios.$post(
        `projects-manage/update?id=${state.currentProject.id}`,
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: getAuthToken(this),
          },
        }
      )
    } catch (err) {
      if (err.response.status === 404) {
        console.error(
          "Error with code 404 - needed resource for update wasn't found"
        )
      }
      if (err.response.status === 417) {
        console.error(
          'Error with code 417 - validation error. Please check request payload with API endpoint payload requirements'
        )
        commit('setEditingStatus', true)
      }
    }
  },
}
