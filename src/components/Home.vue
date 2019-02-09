<template>
    <div class="row">
      <giphy-data
        v-for="GD in getGiphyData"
        v-bind:giphyData="GD"
        v-bind:key="GD.id">
      </giphy-data>
    </div>
</template>
<script>
import GiphyData from './DataComponents/GiphyData';

export default {
    name: 'Home',
    components: {
        GiphyData,
    },
    data: function() {
        return {
            giphyData: this.$store.state.Giphy,
        };
    },
    mounted() {
        this.$store.dispatch('GET_TRENDING_GIFS');
    },
    computed: {
        getGiphyData: function() {
            return this.$store.state.Giphy;
        },
    },
};
</script>
