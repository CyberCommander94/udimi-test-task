<template>
  <div class="home-page">
    <div class="home-page__content-wrapper">
      <AppProjectCard
        v-for="item in projectsData"
        :key="item.id"
        class="home-page__card"
        :project="item"
      ></AppProjectCard>
    </div>
  </div>
</template>

<script>
import AppProjectCard from '@/components/layout/AppProjectCard.vue'

export default {
  components: {
    AppProjectCard,
  },
  data() {
    return {
      projectsData: [],
    }
  },
  mounted() {
    this.fetchProjectsData()
  },
  methods: {
    async fetchProjectsData() {
      const response = await this.$axios.$get('projects-manage/index', {
        headers: {
          'Content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7B7Ty2qQDVmn7Sc1',
          Authorization: `${localStorage.getItem('auth._token.local')}`,
        },
      })
      this.projectsData = response.projects
    },
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1200px;
    width: 100%;
  }

  &__card {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
