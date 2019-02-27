import GhiphyService from '../services/GiphyService';
import INDEX from './index';
import moment from 'moment';

export default {
    GET_GHIPHY: ({ commit }) => {
        GhiphyService.getGiphy()
            .then(giphy => {
                let arrayGiphy = [];
                giphy.data.data.forEach(element => {
                    let datetimeFR = moment(element.import_datetime).format('DD/MM/YYYY HH:mm');
                    arrayGiphy.push({
                        id: element.id,
                        title: element.title,
                        date_import: datetimeFR,
                        image: element.images.fixed_height,
                    });
                });
                commit('ADD_GIPHY', arrayGiphy);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    GET_TRENDING_GIFS: ({ commit }) => {
        INDEX.state.Giphy = [];
        GhiphyService.getTrendingGifs()
            .then(giphy => {
                let arrayGiphy = [];
                giphy.data.forEach(element => {
                    let datetimeFR = moment(element.import_datetime).format('DD/MM/YYYY HH:mm');
                    arrayGiphy.push({
                        id: element.id,
                        title: element.title,
                        date_import: datetimeFR,
                        image: element.images.fixed_height,
                    });
                });
                commit('ADD_GIPHY', arrayGiphy);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    GET_RANDOM_GIFS: ({ commit }) => {
        GhiphyService.getRandomGifs().then(giphy => {
            let arrayGiphy = [];
            let datetimeFR = moment(giphy.data.import_datetime).format('DD/MM/YYYY HH:mm');
            arrayGiphy.push({
                id: giphy.data.id,
                title: giphy.data.title,
                date_import: datetimeFR,
                image: giphy.data.images.fixed_height,
            });
            commit('ADD_GIPHY', arrayGiphy);
        });
    },
    GET_SEARCH_GIF: ({ commit }, text) => {
        GhiphyService.getSearchGif(text)
            .then(giphy => {
                let arrayGiphy = [];
                giphy.data.forEach(element => {
                    let datetimeFR = moment(element.import_datetime).format('DD/MM/YYYY HH:mm');
                    arrayGiphy.push({
                        id: element.id,
                        title: element.title,
                        date_import: datetimeFR,
                        image: element.images.fixed_height,
                    });
                });
                commit('ADD_GIPHY', arrayGiphy);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    GET_STICKER: ({ commit }) => {
        GhiphyService.getRandomSticker()
            .then(giphy => {
                let arrayGiphy = [];
                let datetimeFR = moment(giphy.data.import_datetime).format('DD/MM/YYYY HH:mm');
                arrayGiphy.push({
                    id: giphy.data.id,
                    title: giphy.data.title,
                    date_import: datetimeFR,
                    image: giphy.data.images.fixed_height,
                });
                commit('ADD_GIPHY', arrayGiphy);
            })
            .catch(error => {
                console.log(error);
            });
    },
};
