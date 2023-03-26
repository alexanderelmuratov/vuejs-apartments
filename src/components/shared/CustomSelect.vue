<template>
  <select class="custom-select" :v-model="modelValue" @change="updateSelect">
    <option
      v-for="option in formatedOptions"
      :value="option.value"
      :key="option.value"
      :selected="option.selected"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formatedOptions() {
      return this.options.map(option =>
        typeof option === 'object' ? option : { value: option, label: option }
      );
    },
  },
  methods: {
    updateSelect(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index';

.custom-select {
  width: 220px;
  height: 46px;
  padding: 10px 10px;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.2;
  border: 2px solid $main-color;
  cursor: pointer;
  vertical-align: middle;
}
</style>
