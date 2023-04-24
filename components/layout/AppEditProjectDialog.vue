<template>
  <div class="edit-project-dialog" @click.self="closeDialog">
    <form class="edit-project-dialog__form">
      <div class="edit-project-dialog__form-header">
        <p>Edit project</p>
        <img :src="closeIcon" @click="closeDialog" class="edit-project-dialog__close-btn" />
      </div>
      <div class="edit-project-dialog__row">
        <p class="edit-project-dialog__input-text">Project name:</p>
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
          @click.prevent="handleSubmit"
          class="edit-project-dialog__submit-btn"
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
      this.$emit('closeDialog');
    },
    handleSubmit() {
      this.$emit('handleSubmit', { name: this.projectName });
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

  &__close-btn {
    width: 10px;
    height: 10px;
  }

  &__form {
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 15px 0;
    box-sizing: border-box;
  }

  &__form-header {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 30px 15px 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__row {
    width: 100%;
    padding: 0 30px 15px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__input-text {
    margin-right: 10px;
    width: 35%;
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

    &:focus {
      outline: 2px solid #da8848;
    }
  }
}
</style>
