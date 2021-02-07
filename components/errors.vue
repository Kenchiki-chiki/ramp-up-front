<template>
  <div v-if="errors.length">
    <v-alert type="errors" id="error-alert">
      {{ errors.join('.') }}
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
  z-index: 996;
  position: absolute;
  top: 4px;
  left: 270px;
  right: 20px;
  margin: 0 65px 0 45px;
}
#error-alert {
  background-color: #262626;
}
</style>
