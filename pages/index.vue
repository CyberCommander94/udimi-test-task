<template>
  <div class="home-page">
    <div class="home-page__content-wrapper">
      <div class="home-page__content-wrapper__inner">
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
        <AppProjectCard
          v-for="item in projects"
          :key="item.id"
          class="home-page__card"
          :project="item"
        ></AppProjectCard>
      </div>
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  &__content-wrapper {
    margin-top: 20px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    max-width: 1000px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #bbbbbb;
      border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #888;
    }

    &__inner {
      width: 100%;
      padding: 0 20px 0 20px;
      margin-right: -16px;
      box-sizing: border-box;
    }
  }

  &__card {
    width: 100%;
    margin-bottom: 20px;
  }
}

@include bp($md, min) {
  .home-page {
    &__content-wrapper {
      margin-top: 30px;
    }

    &__inner {
      padding: 0 30px;
    }
  }
}

@include bp($lg, min) {
  .home-page {
    &__content-wrapper {
      margin-top: 35px;
    }

    &__inner {
      padding: 0 40px;
    }
  }
}
</style>
