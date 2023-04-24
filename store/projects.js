import { getAuthToken } from '@/services/utils'

export const state = () => ({
  projects: [],
  currentProject: null,
})

export const mutations = {
  setProjectslist(state, payload) {
    state.projects = payload
  },
  setCurrentProject(state, payload) {
    state.currentProject = payload
  },
}

export const actions = {
  async getProjectsList({ commit }) {
    const response = await this.$axios.$get('projects-manage/index', {
      headers: {
        'Content-type':
          'multipart/form-data; boundary=----WebKitFormBoundary7B7Ty2qQDVmn7Sc1',
        Authorization: getAuthToken(this),
      },
    })
    commit('setProjectslist', response.projects)
  },

  async handleEditProject({ payload }) {
    await this.$axios.$post(
      `projects-manage/update?id=${this.currentProject.id}`,
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: getAuthToken(this),
        },
      }
    )
  },
}
