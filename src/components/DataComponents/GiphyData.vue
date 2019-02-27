<template>
    <div class="col-md-4">
         <div class="card mb-4 bg-dark text-white">
            <!--<img class="card-img" v-bind:src="giphyData.image.url" alt="Card image">-->
            <v-lazy-image class="card-img" alt="giphy card" v-bind:src="giphyData.image.url" src-placeholder="./img/default2.png"/>
            <div class="card-img-overlay">
               <h5 class="card-title">{{ giphyData.title }}</h5>
               <p class="card-text"><small> {{ giphyData.date_import }} </small></p>
            </div>
         </div>
    <!--<clip-loader :loading="spinner.loading" :color="spinner.color" :size="spinner.size" v-else></clip-loader>-->
    </div>
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
    name: 'giphy-data',
    data() {
        return {
            spinner: {
                loading: true,
                color: '#d9534f',
                size: '55px',
            },
        };
    },
    props: {
        giphyData: {
            type: Object,
            required: true,
        },
    },
    components: {
        VLazyImage,
    },
};
</script>
