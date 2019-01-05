import GhiphyService from '../services/GiphyService';
import moment from 'moment';

export default {
    GET_GHIPHY: ({ commit }) => {
        GhiphyService.getGiphy()
            .then(giphy => {
                console.log(giphy.data.data);
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
            })
    }
}