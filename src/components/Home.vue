<template>
    <div class="container">
      <div class="row">
        <giphy-data
          v-for="GD in getGiphyData"
          v-bind:giphyData="GD"
          v-bind:key="GD.id">
        </giphy-data>
      </div>
    </div>
</template>
<script>
import GiphyData from './DataComponents/GiphyData';

export default {
    name: 'Home',
    data() {
        return {
            show: false,
            giphyData: this.$store.state.Giphy,
        };
    },
    mounted() {
        this.$store.dispatch('GET_TRENDING_GIFS');
    },
    components: {
        GiphyData,
    },
    computed: {
        getGiphyData: function() {
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
