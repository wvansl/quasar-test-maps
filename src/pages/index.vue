<template>
  <q-page class="padding">
    <template>
      <gmap-map :center="center" :zoom="7" style="width: 500px; height: 300px">
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
      </gmap-map>
    </template>
  </q-page>
</template>

<style>

</style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        {
          position: { lat: 10.0, lng: 10.0 }
        },
        {
          position: { lat: 11.0, lng: 11.0 }
        }
      ]
    };
  }
};
</script>
