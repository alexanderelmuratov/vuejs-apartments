<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Информация о владельце:</h2>
    <p class="apartments-owner__name">{{ owner.name }}</p>
    <p class="apartments-owner__phone">phone: {{ owner.phone }}</p>
    <p class="apartments-owner__email">e-mail: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index';

.apartments-owner {
  padding: 20px;
  margin-bottom: 20px;
  background: $aside-bg-coloor;

  &__title {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
  }

  &__name,
  &__phone,
  &__email {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
  }
}
</style>
