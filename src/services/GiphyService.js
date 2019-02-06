import CONSTANTS from '../constants/constants';
import fetchService from './fetchService';

export default {
    getGiphy() {
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}search?q=cat&api_key=${CONSTANTS.API_KEY}&limit=9`);
    },

    getTrendingGifs() {
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}gifs/trending?api_key=${CONSTANTS.API_KEY}`);
    },

    getRandomGifs() {
        console.log(`${CONSTANTS.SERVER_ADDRESS}gifs/random?api_key=${CONSTANTS.API_KEY}`);
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}gifs/random?api_key=${CONSTANTS.API_KEY}`);
    },

    getRandomSticker() {
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}stickers/random?api_key=${CONSTANTS.API_KEY}`);
    }
}