<template>
  <div v-if="errors.length" class="mt-3 mb-2 ml-5">
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
