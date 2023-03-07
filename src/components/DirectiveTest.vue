<template>
  <div v-if="isVisible">
    <h1>Directives</h1>
    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'apple'" :key="fruit">{{fruit}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DirectiveTest",
    data() {
      return {
        isVisible: true,
        fruits: ["apple", "banana", "grapefruit", "kiwi"]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>