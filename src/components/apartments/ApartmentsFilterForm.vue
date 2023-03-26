<template>
  <form @submit.prevent="handleSubmit" class="apartments-filter-form">
    <CustomSelect
      v-model="city"
      :options="cities"
      class="apartments-filter-form__select"
    />
    <CustomInput v-model="price" placeholder="Цена, от" />
    <ClickButton class="apartments-filter-form__submit" type="submit"
      >Подбор жилья</ClickButton
    >
  </form>
</template>

<script>
export default {
  name: 'ApartmentsFilterForm',
  data() {
    return {
      city: '',
      price: '',
    };
  },
  computed: {
    cities() {
      return [
        { value: '', label: 'Город', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter-form {
  display: flex;
  /* width: 100%; */
  /* padding-top: 60px; */
  padding-bottom: 40px;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
