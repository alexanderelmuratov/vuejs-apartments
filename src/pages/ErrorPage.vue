<template>
  <PageContainer class="error">
    <h1 class="error__title">Error 404: Page not found</h1>
  </PageContainer>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style lang="scss" scoped>
.error {
  padding-top: 120px;

  &__title {
    font-size: 60px;
    text-align: center;
  }
}
</style>
