<template>
  <PageContainer>
    <ApartmentsFilterForm @submit="logger" />
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :desc="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
        />
      </template>
    </ApartmentsList>
  </PageContainer>
</template>

<script>
import ApartmentsFilterForm from './components/apartments/ApartmentsFilterForm.vue';
import ApartmentsList from './components/apartments/ApartmentsList.vue';
import ApartmentsItem from './components/apartments/ApartmentsItem.vue';
import apartments from './components/apartments/apartments';

export default {
  name: 'App',
  components: {
    ApartmentsFilterForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
    };
  },
  methods: {
    logger(value) {
      console.log(value, 'form value');
    },
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
