'use strict';

/*global $ */

function test(searchTerm, callback) {
  const YOUTUBE = 'https://www.googleapis.com/youtube/v3/search';
  const query = {
    q: `${searchTerm}`,
    per_page: 5
  };
  $.getJSON(YOUTUBE, query, callback);

}


test('test', (response) => {
  console.log(response);
});