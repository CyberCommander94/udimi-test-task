<template>
  <div class="app-navbar">
    <div class="app-navbar__logo">Quwi</div>
    <button v-if="loggedIn" class="app-navbar__mobile-menu-button">
      <img
        :src="getMobileMenuIcon"
        alt=""
        class="app-navbar__mobile-menu-button__icon"
        :class="{ 'menu-opened': isMobileMenuOpened }"
        @click="toggleMobileMenu"
      />
    </button>
    <div
      class="app-navbar__nav-wrapper"
      :class="{ opened: isMobileMenuOpened }"
      @click.self="toggleMobileMenu"
    >
      <div class="app-navbar__nav-wrapper__inner">
        <div class="app-navbar__nav-item-wrapper" @click="toggleMobileMenu">
          <nuxt-link
            v-if="loggedIn"
            to="/"
            class="app-navbar__nav-item"
            @click="toggleMobileMenu"
            >Projects</nuxt-link
          >
        </div>
        <button v-if="loggedIn" class="logout-btn" @click="userLogout">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import menuIcon from '@/assets/images/menu-burger.png'
import menuIconClose from '@/assets/images/close.png'

export default {
  data() {
    return {
      menuIcon,
      menuIconClose,
      isMobileMenuOpened: false,
    }
  },
  computed: {
    ...mapState({
      loggedIn: (state) => state.auth.loggedIn,
    }),
    getMobileMenuIcon() {
      return this.isMobileMenuOpened ? menuIconClose : menuIcon
    },
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened
    },
    async userLogout() {
      this.isMobileMenuOpened = false
      try {
        await this.$auth.logout('local')
        this.$auth.setUser({})
      } catch (err) {
        console.log(err)
      }
    },
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
    position: relative;
    z-index: 5001;
  }

  &__mobile-menu-button {
    display: block;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5001;

    &.hide {
      visibility: hidden;
    }

    &__icon {
      width: 25px;
      height: 25px;
      &.menu-opened {
        -webkit-filter: invert(100%); /* Safari/Chrome */
        filter: invert(100%);
      }
    }
  }

  &__nav-wrapper {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
    width: 0;
    background: transparent;
    transition: background 0.2s ease-out, width 0s 0.2s;
    overflow: hidden;

    &__inner {
      width: 70vw;
      height: 100%;
      background-color: #ffffff;
      padding: 62px 20px 20px 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      transform: translate(-100%);
      transition: transform 0.2s ease-out;
    }
    &.opened {
      width: 100vw;
      background: rgba(0, 0, 0, 0.6);
      transition: background 0.2s ease-in;

      .app-navbar__nav-wrapper__inner {
        transform: translate(0);
        transition: transform 0.2s ease-in;
      }
    }
  }

  &__nav-item-wrapper {
    width: 100%;
    height: auto;
  }

  &__nav-item {
    display: block;
    color: #2a3365;
    text-decoration: none;
    font-size: 16px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0;
    margin-bottom: 5px;

    &:hover {
      color: #c44512;
    }
    &:first-child {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

  .logout-btn {
    color: #ffffff;
    padding: 8px 20px;
    color: #ffffff;
    background-color: #c44512;
    border: none;
    border-radius: 5px;
    font-family: Montserrat;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;

    &:focus {
      outline: 2px solid #da8848;
    }
  }
}

@include bp($lg, min) {
  .app-navbar {
    padding: 10px 30px;

    &__mobile-menu-button {
      display: none;
    }

    &__nav-wrapper {
      height: auto;
      position: relative;
      z-index: inherit;
      width: auto;
      background: transparent;
      transition: none;
      overflow: visible;

      &__inner {
        width: auto;
        height: auto;
        background-color: transparent;
        padding: 0;
        box-sizing: border-box;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        transform: none;
        transition: none;
      }
      &.opened {
        width: auto;
        background: transparent;
        transition: none;

        .app-navbar__nav-wrapper__inner {
          transform: none;
          transition: none;
        }
      }
    }

    &__nav-item-wrapper {
      width: auto;
      height: auto;
    }

    &__nav-item {
      width: auto;
      text-align: center;
      border-bottom: none;
      padding: 8px 20px;
      margin-right: 10px;
      margin-bottom: 0;

      &:hover {
        color: #c44512;
      }
    }

    .logout-btn {
      margin-top: 0;
    }
  }
}
</style>
