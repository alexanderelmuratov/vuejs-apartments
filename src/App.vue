<template>
  <ApartmentsList :items="apartments" />
</template>

<script>
import ApartmentsList from './components/apartments/ApartmentsList.vue'
import apartments from './components/apartments/apartments'

export default {
  name: 'App',
  components: {
    ApartmentsList,
  },
  data() {
    return {
      apartments,
      apartment: {
        id: '5f689a2c09b16000e9a2f47b',
        title: 'Delectus et iste.',
        imgUrl: '/img/apartments/apartment-1.jpg',
        descr:
        'Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.',
        rating: 3.5,
        price: 1667,
        location: {
          city: 'Dnipro',
        },
        owner: {
          name: 'Bobbi',
          phone: '582-740-2926',
          email: 'Pete_Carter53@hotmail.com',
        },
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
