<template>
<div>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-danger fixed-top">
      <button class="navbar-toggler navbar-toggler-right" name="toggler" type="button" data-toggle="collapse" v-on:click="showMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" to="/">Sayra</router-link>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault" :class="{show: show == true}">
        <ul class="navbar-nav mr-auto">
           <li class="nav-item" v-for="item in items" :key="item.id" :class="{'active': active === item.url}" v-on:click.prevent="activeItem(item.url)">
              <router-link class="nav-link" :to="{path: item.url}">
                <strong> {{ item.title }} </strong>
              </router-link>
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
    <div class="container">
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
            active: this.$route.path,
            items: [
                {
                    id: 0,
                    title: 'Home',
                    url: '/',
                },
                {
                    id: 1,
                    title: 'Random',
                    url: '/Random',
                },
                {
                    id: 2,
                    title: 'Sticker',
                    url: '/Sticker',
                },
            ],
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
        activeItem(url) {
            this.active = url;
        },
    },
};
</script>
