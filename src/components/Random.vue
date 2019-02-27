<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div class="row page-moveFromRight">
=======
  <div class="row">
>>>>>>> fb034749d9b8576496dae524bc2f859c90c20f6c
=======
  <div class="row page-moveFromRight">
>>>>>>> tibdev78-master
    <giphy-data
      v-for="GD in getRandomGiphyData"
      v-bind:giphyData="GD"
      v-bind:key="GD.id">
    </giphy-data>
  </div>
</template>
<script>
import GiphyData from './DataComponents/GiphyData';

export default {
    name: 'Random',
    components: {
        GiphyData,
    },
<<<<<<< HEAD
<<<<<<< HEAD
    data() {
=======
    data: function() {
>>>>>>> fb034749d9b8576496dae524bc2f859c90c20f6c
=======
    data() {
>>>>>>> tibdev78-master
        return {
            show: false,
            giphyData: this.$store.state.Giphy,
        };
    },
    mounted() {
        this.$store.dispatch('GET_RANDOM_GIFS');
    },
    computed: {
        getRandomGiphyData: function() {
            return this.$store.state.Giphy;
        },
    },
    methods: {
        showMenu() {
            this.show = !this.show;
        },
    },
};
</script>
