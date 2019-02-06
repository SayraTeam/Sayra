<template>
<div>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-danger fixed-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" v-on:click="showMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Sayra</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault" :class="{show: show == true}">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="articles">Gifs<span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Random">Random<span class="sr-only"></span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="Sticker">Sticker<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <giphy-data
          v-for="GD in getRandomGiphyData"
          v-bind:giphyData="GD"
          v-bind:key="GD.id">
        </giphy-data>
      </div>
    </div>
</div>
</template>
<script>
import GiphyData from './DataComponents/GiphyData';

export default {
    name: 'Random',
    components: {
      GiphyData
    },
    data: function() {
        return {
            show: false,
            giphyData: this.$store.state.Giphy
        }
    },
    mounted() {
      this.$store.dispatch('GET_STICKER');
    },
    computed: {
        getRandomGiphyData: function() {
            return this.$store.state.Giphy;
        },
    },
    methods: {
      showMenu() {
        this.show = !this.show;
      }
    }
}
</script>
