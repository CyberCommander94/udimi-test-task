<template>
  <div class="app-navbar">
    <div class="app-navbar__logo">Quwi</div>
    <button class="app-navbar__mobile-menu-button disabled">
      <img
        :src="menuIcon"
        alt=""
        class="app-navbar__mobile-menu-button__icon"
      />
    </button>
    <div>
      <nuxt-link to="/" class="app-navbar__nav-item">Projects</nuxt-link>
      <nuxt-link to="/login" class="app-navbar__nav-item">Logout</nuxt-link>
    </div>
  </div>
</template>

<script>
import menuIcon from '@/assets/images/menu-burger.png'

export default {
  data() {
    return {
      menuIcon,
    }
  },
}
</script>

<style scoped lang="scss">
.app-navbar {
  width: 100vw;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

  &__logo {
    font-size: 28px;
    font-weight: bold;
    color: #2a3365;
  }

  &__mobile-menu-button {
    &.disabled {
      display: none;
    }

    &__icon {
      width: 25px;
      height: 25px;
    }
  }

  &__nav-item {
    color: #2a3365;
    text-decoration: none;
    font-size: 18px;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      color: #c44512;
    }
  }
}
</style>
