<template>
  <button v-bind:type="type" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ClickButton',
  props: {
    type: {
      type: String,
      deafult: 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 220px;
  height: 46px;
  font-family: inherit;
  font-size: 18px;
  color: #fff;
  background-color: #ff662d;
  border: 1px solid transparent;
  cursor: pointer;

  &--outlined {
    color: #ff662d;
    background-color: #fff;
    border: 1px solid #ff662d;
  }
}
</style>
