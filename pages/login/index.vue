<template>
  <div class="login-form-wrapper">
    <form class="login-form" @submit.prevent="userLogin">
      <p class="login-logo">Quwi</p>
      <div class="login-form__row warning">
        <p v-if="isAuthFailed" class="login-form__warning-text">
          Incorrect email or password. Please check your credentials and try
          again.
        </p>
      </div>
      <div class="login-form__row">
        <input
          v-model="login.email"
          placeholder="email"
          type="text"
          class="login-form__input"
        />
      </div>
      <div class="login-form__row">
        <input
          v-model="login.password"
          placeholder="password"
          type="password"
          class="login-form__input"
        />
      </div>
      <div class="login-form__row">
        <button type="submit" class="login-form__submit-btn">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      isAuthFailed: false,
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        this.$auth.setUser(response.data.app_init.user)
      } catch (err) {
        if (err.response.status === 417) {
          this.isAuthFailed = true
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('@/assets/images/login-bg.jpg') no-repeat center center;
  background-size: cover contain;
}

.login-logo {
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  color: #2a3365;
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
}

.login-form {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  &__warning-text {
    font-size: 8px;
    color: #c44512;
    line-height: 12px;
    font-family: Montserrat;
  }

  &__row {
    width: 100%;
    padding: 0 20px 15px 20px;
    box-sizing: border-box;

    &.warning {
      padding-bottom: 5px;
    }
  }

  &__input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 15px 0 5px;
    box-sizing: border-box;
    color: #343536;
    background-color: transparent !important;
    font-family: Montserrat;

    &::placeholder {
      color: #777777;
    }

    &:focus {
      outline: 2px solid #da8848;
      border-bottom: 1px solid transparent;
    }
  }

  &__submit-btn {
    height: 40px;
    width: 100%;
    color: #ffffff;
    background-color: #c44512;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-family: Montserrat;

    &:focus {
      outline: 2px solid #da8848;
    }
  }
}

@include bp($sm, min) {
  .login-form {
    border-radius: 15px;
    padding: 24px 0;
    max-width: 500px;

    &__row {
      padding: 0 30px 15px 30px;
    }
  }
}
</style>
