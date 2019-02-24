<template>
  <div class="row">
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
    data() {
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
