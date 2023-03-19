<template lang="pug">
form.px-4.px-md-5
  .position-relative
    .position-absolute.top-50.start-0.translate-middle.ps-5
      img(src="/favicon-96x96.png" alt="Опендатабот")
    input.form-control.form-control-lg.ps-5(
      placeholder='Код компанії' 
      type='text' 
      aria-label='Search' 
      v-model='text'
      :class='{shake: isError}'
      list="suggests"
      )

    datalist#suggests(v-if='suggests.length')
      option(:value='suggest' v-for='suggest in suggests')

</template>

<script>

import { validateCompanyCode } from "../js/utils";


export default {
  props: {
    suggests: Array
  },
  data: () => ({
    text: '',
    isError: false,
  }),
  watch: {
    text(val) {
      if (val.length !== 8) {
        return
      }
      if (!validateCompanyCode(val)) {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 500);
      }
      else {
        this.$emit('search', val);
      }
    }
  },
}

</script>

<style scoped lang="sass">
img
  width: 24px
  height: 24px
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