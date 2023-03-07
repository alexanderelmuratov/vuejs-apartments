<template>
  <PageContainer>
    <div class="apartments-list">
      <ApartmentsItem 
        v-for="{id, descr, rating, imgUrl, price} in items"
        :key="id"
        :desc="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </PageContainer>  
</template>

<script>
import PageContainer from '../shared/PageContainer.vue'
import ApartmentsItem from './ApartmentsItem.vue'

  export default {
    name: 'ApartmentsList',
    components: {
      PageContainer,
      ApartmentsItem,
    },
    props: {
      items: {
        type: Array,
        default: () => [],
      }
    }
  }
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>