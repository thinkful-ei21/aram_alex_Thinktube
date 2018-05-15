'use strict';

/*global $ */

// function test(searchTerm, callback) {
//   const CLIENT_ID = '1094858048131-jng7t456tdnjduu1adso0ee9fe8fd18b.apps.googleusercontent.com';
//   const YOUTUBE = 'https://www.googleapis.com/youtube/v3/search';
//   const query = {
//     part: 'snippet',
//     key: CLIENT_ID,
//     q: `${searchTerm}`
//   };
//   $.getJSON(YOUTUBE, query, callback);

// }


// test('test', (response) => {
//   console.log(response);
// });

$.getJSON(
  "https://www.googleapis.com/youtube/v3/search",
  {
    maxResults: '25',
    part: 'snippet',
    key: 'AIzaSyBBi4t1qBXLqhuLw-fnyIEpFn_YBrSCYuI',
    q: 'Rick Rolled',
    type: ''
  },
  callbackFunction
)

function callbackFunction(data) {
  console.log(data);
  console.log(data.items[0].snippet.thumbnails.default);
  $('.js-rick').val(`<img src="${data.items[0].snippet.thumbnails.default.url}">`);
} 