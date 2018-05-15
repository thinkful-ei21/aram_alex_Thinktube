'use strict';

/*global $ */

function test(searchTerm, callback) {
  const CLIENT_ID = '1094858048131-jng7t456tdnjduu1adso0ee9fe8fd18b.apps.googleusercontent.com';
  const YOUTUBE = 'https://www.googleapis.com/youtube/v3/search';
  const query = {
    part: 'snippet',
    key: CLIENT_ID,
    q: `${searchTerm}`,
    per_page: 5
  };
  $.getJSON(YOUTUBE, query, callback);

}


test('test', (response) => {
  console.log(response);
});