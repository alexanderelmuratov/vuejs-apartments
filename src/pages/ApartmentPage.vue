<template>
  <PageContainer
    style="display: flex; padding-top: 120px; padding-bottom: 55px"
  >
    <ApartmentsMainInfo :apartment="apartment" />
    <aside style="max-width: 350px">
      <ApartmentsOwner :owner="apartment.owner" />
      <ReviewsSection :reviews="reviews" />
    </aside>
  </PageContainer>
</template>

<script>
import ApartmentsMainInfo from '../components/apartments/ApartmentsMainInfo.vue';
import ApartmentsOwner from '../components/apartments/ApartmentsOwner.vue';
import ReviewsSection from '../components/reviews/ReviewsSection.vue';
import apartments from '../components/apartments/apartments';
import reviewsList from '../components/reviews/reviews.js';

export default {
  name: 'ApartmentPage',
  components: {
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsSection,
  },
  computed: {
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id
      );
    },
    reviews() {
      return reviewsList;
    },
  },
  mounted() {
    console.log(this.reviews);
    // console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped></style>
