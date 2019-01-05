<template>
    <!--<div class="col-md-4">
        <div class="card mb-4">
            <img class="card-img-top" v-bind:src="giphyData.image.url" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ giphyData.title }}</h5>
                <p class="card-text"><small class="text-muted"> {{ giphyData.date_import }} </small></p>
            </div>
        </div>
    </div>-->
    <div class="col-md-4">
         <div class="card mb-4 bg-dark text-white">
            <img class="card-img" v-bind:src="giphyData.image.url" alt="Card image">
            <div class="card-img-overlay">
               <h5 class="card-title">{{ giphyData.title }}</h5>
               <p class="card-text"><small> {{ giphyData.date_import }} </small></p>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    name: 'giphy-data',
    props: {
        giphyData: {
            type: Object,
            required: true,
        }
    },
}
</script>