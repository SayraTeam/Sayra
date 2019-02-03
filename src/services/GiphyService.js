import CONSTANTS from '../constants/constants';
import fetchService from './fetchService';

export default {
    getGiphy() {
        return fetchService.fetchGET(`${CONSTANTS.SERVER_ADDRESS}search?q=cat&api_key=${CONSTANTS.API_KEY}&limit=9`);
    }
}