<template>
  <section class="apartments-main-info">
    <div class="apartments-main-info__heading">
      <h1 class="apartments-main-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartments-main-info__photo" />
    <p class="apartments-main-info__description">{{ apartment.descr }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsMainInfo',
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-main-info {
  margin-right: 30px;

  &__heading {
    display: flex;
  }

  &__title {
    margin-bottom: 20px;
    margin-right: 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    text-transform: capitalize;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    margin-top: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.3;
  }
}
</style>
