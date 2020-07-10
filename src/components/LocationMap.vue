<template>
  <div v-if="this.url.length > 0">
    <l-map style="height: 350px;z-index: 0;" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: ["marker"],
  data() {
    return {
      url: "",
      zoom: 14,
      center: [],
      markerLatLng: []
    };
  },
  mounted() {
    if (this.$props.marker[0] != null) {
      this.url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      this.center = this.$props.marker;
      this.markerLatLng = this.$props.marker;
    }
  }
};
</script>
