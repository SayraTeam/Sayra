import CONSTANTS from '../constants/constants';
import fetchService from './fetchService';

export default {
    getGiphy() {
        return fetchService.fetchGET(
            `${CONSTANTS.SERVER_ADDRESS}search?q=cat&api_key=${process.env.VUE_APP_TOKEN}&limit=9`
        );
    },

    getTrendingGifs() {
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}gifs/trending?api_key=${process.env.VUE_APP_TOKEN}`);
    },

    getRandomGifs() {
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}gifs/random?api_key=${process.env.VUE_APP_TOKEN}`);
    },

    getRandomSticker() {
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}stickers/random?api_key=${process.env.VUE_APP_TOKEN}`);
    },
    getSearchGif(text) {
        return fetchService.fetchGET(
            `${CONSTANTS.SERVER_ADDRESS}gifs/search?q=${text}&api_key=${process.env.VUE_APP_TOKEN}`
        );
    },
};
