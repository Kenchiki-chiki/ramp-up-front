<template>
  <div v-if="errors.length" class="">
    <v-alert type="errors">
      {{ errors.join('。') }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      default: () => {}
    },
    showLabel: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.errors {
  z-index: 998;
  position: absolute;
  top: 11px;
  left: 270px;
  right: 20px;
  margin: 0 65px 0 45px;
}
</style>
