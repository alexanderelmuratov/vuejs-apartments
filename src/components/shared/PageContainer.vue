<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageContainer',
};
</script>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  width: 1110px;
  margin: 0 auto;
}
</style>
