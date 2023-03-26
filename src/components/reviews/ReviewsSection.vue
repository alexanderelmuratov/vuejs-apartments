<template>
  <section class="reviews-section">
    <div class="reviews-section__heading">
      <h2 class="reviews-section__title">Суммарный рейтинг</h2>
      <div class="reviews-section__rating">
        <span>{{ amountOfReviews }} Отзыв(ов)</span>
        <StarRating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
  </section>
  <button @click="toggleReviews" class="reviews-section__show-more">
    {{ buttonText }}
  </button>
</template>

<script>
import ReviewsItem from './reviews-item/ReviewsItem.vue';

export default {
  name: 'ReviewsSection',
  components: {
    ReviewsItem,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? 'Свернуть'
        : 'Читать еще...';
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index';

.reviews-section {
  &__heading {
    padding: 20px;
    background: $aside-bg-coloor;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.25;
  }

  &__show-more {
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
    line-height: 1.2;
    background: $aside-bg-coloor;
    border: none;
    cursor: pointer;
  }
}
</style>
