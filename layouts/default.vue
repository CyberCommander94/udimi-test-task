<template>
  <div id="app" class="app">
    <AppNavbar />
    <div class="app__content-wrapper">
      <nuxt />
    </div>
    <AppEditProjectDialog
      v-if="isEditProjectDialogOpened"
      :project-data="currentProject"
      @handleSubmit="handleEditProjectSubmit"
      @closeDialog="closeEditProjectDialog"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import AppNavbar from '@/components/layout/AppNavbar'
import AppEditProjectDialog from '@/components/layout/AppEditProjectDialog'

export default {
  name: 'Default',
  components: {
    AppNavbar,
    AppEditProjectDialog,
  },

  data() {
    return {}
  },

  computed: {
    ...mapState({
      isEditProjectDialogOpened: (state) =>
        state.dialogs.isEditProjectDialogOpened,
      currentProject: (state) => state.projects.currentProject,
      isEditingFailed: (state) => state.projects.isEditingFailed,
    }),
  },

  methods: {
    ...mapMutations({
      setEditProjectDialogState: 'dialogs/setEditProjectDialogState',
      setCurrentProject: 'projects/setCurrentProject',
      setEditingStatus: 'projects/setEditingStatus',
    }),
    ...mapActions({
      getProjectsList: 'projects/getProjectsList',
      handleEditProject: 'projects/handleEditProject',
    }),
    handleEditProjectSubmit(payload) {
      const formData = new FormData()
      formData.append('name', payload.name)
      this.handleEditProject(formData)
      if (!this.isEditingFailed) {
        this.closeEditProjectDialog()
        this.getProjectsList()
      }
    },
    closeEditProjectDialog() {
      this.setEditProjectDialogState(false)
      this.setCurrentProject(null)
      this.setEditingStatus(false)
    },
  },
}
</script>

<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__content-wrapper {
    width: 100%;
    height: 100%;
    padding-top: 62px;
    box-sizing: border-box;
  }
}
</style>
