<template>
  <div class="apartments-item" @click="$router.push(`/apartment/${id}`)">
    <div class="apartments-item__inner">
      <div class="apartments-item__content">
        <p class="apartments-item__description">{{ desc }}</p>
        <StarRating :rating="rating" />
        <div class="apartments-item__price">UAH {{ price }}</div>
      </div>
      <img :src="getImgUrl(imgSrc)" alt="" class="apartments-item__photo" />
      <!-- <router-link to="/apartment" class="apartments-item__link"></router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApartmentsItem',
  props: {
    id: {
      type: String,
    },
    desc: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImgUrl(pic) {
      return require(`../../assets${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-item {
  position: relative;
  width: 33.333%;
  padding: 0 15px;
  margin-bottom: 30px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
