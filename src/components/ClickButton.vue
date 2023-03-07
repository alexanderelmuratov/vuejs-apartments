<template>
  <button v-bind:type="type" class="btn btn--outlined">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "ClickButton",
    props: {
      type: {
        type: String,
        deafult: "button",
      },
    }    
  }
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  min-width: 208;
  padding: 8px 15px;
  font-size: 18px;
  color: #fff;
  background-color: #FF662D;
  border: 1px solid transparent;
  cursor: pointer;

  &--outlined {
    color: #FF662D;
    background-color: #fff;
    border: 1px solid #FF662D;
  }
}

</style>
