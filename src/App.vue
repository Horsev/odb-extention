<template lang="pug">
#app.container-md.px-0.d-flex
  .my-auto.w-100
    search

</template>

<script>
import { getLocalStorage, setLocalStorage } from "./js/localstorage";
import Search from './components/odb-search.vue';

import { reUrl } from "./js/regexp"

export default {
  data: () => ({
    tableData: {},
    currentEndpoint: "",
    endpoints: [],
    isEndpointError: false,
    addNewEndpoint: false,
  }),
  methods: {
  },

  created() {
    this.endpoints = getLocalStorage("endpoints") || [];
    this.currentEndpoint = this.endpoints[0] || "";
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

.shake
	animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both
	transform: translate3d(0, 0, 0)
	backface-visibility: hidden
	perspective: 1000px

@keyframes shake
	10%, 90%
		transform: translate3d(-1px, 0, 0)
  
	20%, 80%
		transform: translate3d(2px, 0, 0)

	30%, 50%, 70%
		transform: translate3d(-4px, 0, 0)

	40%, 60%
		transform: translate3d(4px, 0, 0)
</style>
