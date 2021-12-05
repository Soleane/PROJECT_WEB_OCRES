import axios from 'axios';
const KEY = 'AIzaSyAQ9BNpTN9509pfTmY4wngK9kjMgb-huAM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: KEY
    }
})