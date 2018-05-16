const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyBBi4t1qBXLqhuLw-fnyIEpFn_YBrSCYuI';

const api = (function () {
    const fetchVideos = function (searchTerm, callback) {
        const query = {
            part: 'snippet',
            key: API_KEY,
            q: searchTerm,
        }
    $.getJSON(BASE_URL, query, callback);
    };
    return {
        fetchVideos
    };
}());