<template>
  <img
    src="../assets/logo/logo.svg"
    alt="Logo"
    @click="$router.push('/')"
    style="cursor: pointer"
  />
</template>

<script>
export default {
  name: 'LogoImg',
};
</script>

<style lang="scss" scoped></style>
