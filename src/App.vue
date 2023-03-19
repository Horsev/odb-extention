<template lang="pug">
#app.container-md.px-0.d-flex
  .my-auto.w-100
    .container-md.p-3
      search(:suggests="suggests", @search="openURL")

</template>

<script>
import Search from './components/odb-search.vue';
import { getLocalStorage, setLocalStorage } from "./js/localstorage";


export default {
  data: () => ({
    suggests: [],
  }),
  methods: {
    async addSuggests(suggest) {
      this.suggests = await getLocalStorage('suggests') || [];
      this.suggests.push(suggest);

      this.suggests = [...new Set(this.suggests)];

      this.suggests = this.suggests.slice(-10);

      setLocalStorage('suggests', this.suggests);
    },
    getSuggests() {
      return getLocalStorage('suggests') || [];
    },
    openURL(data) {
      window.open(`https://opendatabot.ua/c/${data}?from=extention`, "_self")
      this.addSuggests(data);
    },
  },
  async created() {
    this.suggests = await this.getSuggests() || [];
  },
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
