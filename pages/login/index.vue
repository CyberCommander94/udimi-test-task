<template>
  <div class="login-form-wrapper">
    <form class="login-form" @submit.prevent="userLogin">
      <p class="login-logo">Quwi</p>
      <div class="login-form__row">
        <input v-model="login.email" placeholder="email" type="text" class="login-form__input" />
      </div>
      <div class="login-form__row">
        <input v-model="login.password" placeholder="password" type="password" class="login-form__input" />
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
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        console.log(response)
        this.$auth.setUser(response.data.app_init.user)
      } catch (err) {
        console.log(err)
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
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  &__row {
    width: 100%;
    padding: 0 30px 15px 30px;
    box-sizing: border-box;
  }


  &__input {
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0 15px;
    box-sizing: border-box;
    color: #2a3365;

    &::placeholder {
      color: #bbbbbb;
    }

    &:focus {
      outline: 2px solid #da8848;
      border: 1px solid transparent;
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

    &:focus {
      outline: 2px solid #da8848;
    }
  }
}
</style>
