<template>
  <div class="project-card" @click="startEditing">
    <img class="project-card__image" :src="getProjectImg" alt="" />
    <h2 class="project-card__name">{{ project.name }}</h2>
    <p class="project-card__status" :class="{ active: project.is_active }">
      {{ getStatus }}
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import defaultProjectIcon from '@/assets/images/default-project-icon.jpeg'

export default {
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getProjectImg() {
      return this.project?.logo_url
        ? this.project?.logo_url
        : defaultProjectIcon
    },
    getStatus() {
      return this.project.is_active ? 'Active' : 'Unactive'
    },
  },
  methods: {
    ...mapMutations({
      setEditProjectDialogState: 'dialogs/setEditProjectDialogState',
      setCurrentProject: 'projects/setCurrentProject',
    }),
    startEditing() {
      this.setEditProjectDialogState(true)
      this.setCurrentProject(this.project)
    },
  },
}
</script>

<style lang="scss" scoped>
.project-card {
  padding: 20px 40px;
  background-color: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  &__image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 60px;
  }

  &__name {
    margin-right: 60px;
  }

  &__status {
    font-weight: 700;
    color: red;
    &.active {
      color: green;
    }
  }
}
</style>
