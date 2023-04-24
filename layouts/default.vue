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
import { mapState, mapMutations } from 'vuex'

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
      currentProject: (state) => state.project.currentProject,
    }),
  },
  methods: {
    ...mapMutations({
      setEditProjectDialogState: 'dialogs/setEditProjectDialogState',
      setCurrentProject: 'project/setCurrentProject',
    }),
    async handleEditProjectSubmit(payload) {
      const formData = new FormData();
      formData.append("name", payload.name);
      const response = await this.$axios.$post(
        `projects-manage/update?id=${this.currentProject.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${localStorage.getItem('auth._token.local')}`,
          },
        }
      )
      this.closeEditProjectDialog()
    },
    closeEditProjectDialog() {
      this.setEditProjectDialogState(false)
      this.setCurrentProject(null)
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
