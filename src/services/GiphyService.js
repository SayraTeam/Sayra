import Vue from 'vue';
import CONSTANTS from '../constants/constants';
import exception_manager from 'exception_manager';

export default {
    getGiphy() {
        return Vue.axios.get(`${CONSTANTS.SERVER_ADDRESS}search?q=cat&api_key=${CONSTANTS.API_KEY}&limit=9`).catch(error => {
            exception_manager.handleException(error, 'GiphyService.js', 8, window, CONSTANTS.ERROR_SERVER_ADDRESS);
        });
    },

    getTrendingGifs() {
        return Vue.axios.get(`${CONSTANTS.SERVER_ADDRESS}gifs/trending?api_key=${CONSTANTS.API_KEY}`).catch(error => {
            exception_manager.handleException(error, 'GiphyService.js', 8, window, CONSTANTS.ERROR_SERVER_ADDRESS);
        });
    },

    getRandomGif() {
        return Vue.axios.get(`${CONSTANTS.SERVER_ADDRESS}gifs/random?api_key=${CONSTANTS.API_KEY}`).catch(error => {
            exception_manager.handleException(error, 'GiphyService.js', 8, window, CONSTANTS.ERROR_SERVER_ADDRESS);
        });
    },

    getRandomSticker() {
        return Vue.axios.get(`${CONSTANTS.SERVER_ADDRESS}stickers/random?api_key=${CONSTANTS.API_KEY}`).catch(error => {
            exception_manager.handleException(error, 'GiphyService.js', 8, window, CONSTANTS.ERROR_SERVER_ADDRESS);
        });
    }
}