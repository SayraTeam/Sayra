<template>
<div>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-danger fixed-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" v-on:click="showMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault" :class="{show: show == true}">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="articles">Articles<span class="sr-only">(current)</span></a>
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
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top img-thumbnail" src="img/img1.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title 1</h5>
              <p class="card-text">text 1</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card margin" style="width: 18rem;">
            <img class="card-img-top img-thumbnail" src="img/img1.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title 2</h5>
              <p class="card-text">text 2</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card margin" style="width: 18rem;">
            <img class="card-img-top img-thumbnail" src="img/img1.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title 3</h5>
              <p class="card-text">text 3</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Home',
    data: function() {
        return {
            show: false
        }
    },
    methods: {
      showMenu() {
        this.show = !this.show;
      }
    }
}
</script>