<template>
  <div class="error-page">
    <h1 class="error-page__title">Oops, something unexpected happened!</h1>
    <p class="error-page__description">
      We searched high and low but couldn’t find what you’re looking for. You
      can use this link to return to homepage:
    </p>
    <div class="error-page__nav-link-wrapper">
      <nuxt-link to="/" class="error-page__nav-link">
        <span>Go to Home Page</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'error-layout',
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title,
  &__description,
  &__nav-link-wrapper {
    width: 70%;
  }

  &__description {
    margin-top: 20px;
  }

  &__nav-link-wrapper {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
  }

  &__nav-link {
    color: #c44512;
  }
}
</style>
