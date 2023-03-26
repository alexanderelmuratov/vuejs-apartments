<template>
  <section class="reviews-item">
    <ReviewsHeading :author="review.author" :rating="review.rating" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading.vue';

export default {
  name: 'ReviewsItem',
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/index';

.reviews-item {
  padding: 20px;
  border: 2px solid $aside-bg-coloor;
  border-top: none;

  &__content {
    font-size: 16px;
    line-height: 1.25;
  }
}
</style>
