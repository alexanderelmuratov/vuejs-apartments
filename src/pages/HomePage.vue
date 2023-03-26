<template>
  <!-- <main class="homepage"> -->
  <PageContainer style="padding-top: 120px">
    <ApartmentsFilterForm @submit="filter" />
    <p v-if="!filteredApartments.length">Ничего не найдено</p>
    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :id="apartment.id"
          :desc="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
        />
      </template>
    </ApartmentsList>
  </PageContainer>
  <!-- </main> -->
</template>

<script>
import ApartmentsFilterForm from '../components/apartments/ApartmentsFilterForm.vue';
import ApartmentsList from '../components/apartments/ApartmentsList.vue';
import ApartmentsItem from '../components/apartments/ApartmentsItem.vue';
import apartments from '../components/apartments/apartments';
import { getApartmentsList } from '../services/apartment-service';

export default {
  name: 'HomePage',
  components: {
    ApartmentsFilterForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
      filters: {
        city: '',
        price: '',
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    filter({ city, price }) {
      if (city === undefined || price === undefined) return;
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter(
        apartment => apartment.location.city === this.filters.city
      );
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter(
        apartment => apartment.price >= this.filters.price
      );
    },
  },
};
</script>

<style></style>
