<template>
    <div class="col-md-4">
         <div class="card mb-4 bg-dark text-white">
            <v-lazy-image class="card-img" alt="giphy card" v-bind:src="giphyData.image.url" src-placeholder="./img/default2.png"/>
            <div class="card-img-overlay">
               <h5 class="card-title">{{ giphyData.title }}</h5>
               <p class="card-text"><strong>{{ giphyData.date_import }}</strong></p>
            </div>
         </div>
    </div>
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
    name: 'giphy-data',
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
