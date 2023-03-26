<template>
  <div class="reviews-heading">
    <ReviewsAvatar />
    <div class="reviews-heading__content">
      <p class="reviews-heading__author">{{ author }}</p>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import ReviewsAvatar from './ReviewsAvatar.vue';

export default {
  name: 'ReviewsHeading',
  components: {
    ReviewsAvatar,
  },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  margin-bottom: 20px;

  &__content {
    margin-left: 20px;
  }

  &__author {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.2;
  }
}
</style>
