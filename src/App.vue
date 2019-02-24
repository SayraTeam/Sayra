<template>
<div>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-danger fixed-top">
      <button class="navbar-toggler navbar-toggler-right" name="toggler" type="button" data-toggle="collapse" v-on:click="showMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">Sayra</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault" :class="{show: show == true}">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item  active">
            <a class="nav-link" name="home" href="/">Gifs<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" name="random" href="Random">Random<span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" name="sticker" href="Sticker">Sticker<span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="valueSearch">
          <button class="btn btn-primary my-2 my-sm-0" v-on:click="search" type="button">
            <i class="fas fa-md fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
    <div class="container page-moveFromRight">
      <router-view/>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            show: false,
            valueSearch: '',
        };
    },
    methods: {
        showMenu() {
            this.show = !this.show;
        },
        search() {
            !this.valueSearch
                ? this.$store.dispatch('GET_TRENDING_GIFS')
                : this.$store.dispatch('GET_SEARCH_GIF', this.valueSearch);
        },
    },
};
</script>
