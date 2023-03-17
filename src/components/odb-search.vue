<template lang="pug">
.container-md.p-3
  form.px-4.px-md-5
    .position-relative
      .position-absolute.top-50.start-0.translate-middle.ps-5
        span 🔎
      input.form-control.form-control-lg.ps-5(placeholder='Код або ІНН' type='search' aria-label='Search' v-model='text')
</template>

<script>

export default {
  props: {
    legend: {
      type: Array
    }
  },
  data: () => ({
    text: ''
  }),
}

</script>
