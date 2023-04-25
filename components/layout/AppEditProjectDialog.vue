<template>
  <div class="edit-project-dialog" @click.self="closeDialog">
    <form class="edit-project-dialog__form">
      <div class="edit-project-dialog__form-header">
        <p>Edit project</p>
        <img
          :src="closeIcon"
          class="edit-project-dialog__close-btn"
          @click="closeDialog"
        />
      </div>
      <div class="edit-project-dialog__row">
        <pre class="edit-project-dialog__input-text">Project name:</pre>
        <input
          v-model="projectName"
          placeholder="Project name"
          type="text"
          class="edit-project-dialog__input"
        />
      </div>
      <div class="edit-project-dialog__row">
        <button
          type="submit"
          class="edit-project-dialog__submit-btn"
          @click.prevent="handleSubmit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import closeIcon from '@/assets/images/close.png'

export default {
  props: {
    projectData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      closeIcon,
      projectName: this.projectData.name,
    }
  },

  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    },
    handleSubmit() {
      this.$emit('handleSubmit', { name: this.projectName })
    },
  },
}
</script>

<style lang="scss" scoped>
.edit-project-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  &__close-btn {
    width: 12px;
    height: 12px;
  }

  &__form {
    width: 100%;
    background-color: #ffffff;
    border-radius: 0;
    padding: 15px 0;
    box-sizing: border-box;
  }

  &__form-header {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__row {
    width: 100%;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__input-text {
    margin-right: 10px;
    width: max-content;
    font-size: 12px;
    font-family: Montserrat;
  }

  &__input {
    width: 100%;
    height: 40px;
    font-family: Montserrat;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 15px 0 5px;
    box-sizing: border-box;
    color: #343536;
    background-color: transparent !important;
    font-size: 12px;

    &::placeholder {
      color: #777777;
      font-family: Montserrat;
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
    font-size: 12px;
    font-family: Montserrat;
    cursor: pointer;

    &:focus {
      outline: 2px solid #da8848;
    }
  }
}

@include bp($sm, min) {
  .edit-project-dialog {
    &__form {
      max-width: 500px;
      border-radius: 5px;
    }

    &__form-header {
      padding: 0 30px 15px 30px;
      margin-bottom: 30px;
      font-size: 14px;
    }

    &__row {
      padding: 0 30px 15px 30px;
    }

    &__input-text {
      width: 35%;
      font-size: 14px;
    }

    &__input {
      font-size: 14px;
    }

    &__submit-btn {
      font-size: 14px;
    }
  }
}
</style>
