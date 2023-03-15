<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateInput"
    class="custom-input"
  />
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index';

.custom-input {
  width: 220px;
  height: 46px;
  padding: 11px 20px;
  font-family: inherit;
  font-size: 18px;
  line-height: inherit;
  border: 2px solid $main-color;
  outline: none;

  &::placeholder {
    color: inherit;
  }
}
</style>
