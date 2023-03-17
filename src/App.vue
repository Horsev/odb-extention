<template lang="pug">
#app.container-md.px-0.d-flex
  .my-auto.w-100
    search(:suggests="suggests")

</template>

<script>
import Search from './components/odb-search.vue';

export default {
  data: () => ({
    suggests: [],
  }),
  components: {
    Search
  }
}

</script>

<style scoped lang="sass">
#app
	min-height: 100vh

.container-md
	max-width: 768px

</style>
