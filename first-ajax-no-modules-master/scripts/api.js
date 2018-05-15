const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyBBi4t1qBXLqhuLw-fnyIEpFn_YBrSCYuI';

const api = (function () {
    const fetchVideos = function (searchTerm, callback) {
        const query = {
            part: 'snippet',
            key: API_KEY,
            q: searchTerm,
        }
        //To return or not to return
        console.log($.getJSON(BASE_URL, query, callback));
        return $.getJSON(BASE_URL, query, callback).map(function(item) {
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.default.url
            }
    })}
    return {fetchVideos};
    })();