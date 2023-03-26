<template>
  <header class="header">
    <PageContainer>
      <LogoImg />
    </PageContainer>
  </header>
</template>

<script>
import LogoImg from './LogoImg.vue';

export default {
  name: 'AppHeader',
  components: { LogoImg },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index';

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 16px 0;
  background: $secondary-coloor;
}
</style>
