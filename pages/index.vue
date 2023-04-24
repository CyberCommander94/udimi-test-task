<template>
  <div class="home-page">
    <div class="home-page__content-wrapper">
      <AppProjectCard
        v-for="item in projects"
        :key="item.id"
        class="home-page__card"
        :project="item"
      ></AppProjectCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import AppProjectCard from '@/components/layout/AppProjectCard.vue'

export default {
  components: {
    AppProjectCard,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      projects: (state) => state.projects.projects,
    }),
  },
  mounted() {
    this.getProjectsList()
  },
  methods: {
    ...mapActions({
      getProjectsList: 'projects/getProjectsList',
    }),
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
