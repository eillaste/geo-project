<template>
  <v-container class="nice">
    <i class="mdi mdi-filter"></i>
    <v-overflow-btn
      background-color="blue lighten-5"
      class="my-2"
      :items="items"
      label
      dense
      :value="value"
      v-model="active"
      @change="$emit('choose_filter', active)"
    ></v-overflow-btn>
  </v-container>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    items: ["contains", "exact", "startswith", "endswith"],
    active: "exact"
  })
};
</script>
<style>
.nice {
  width: 145px;
}
</style>
