// const API_KEY = 'AIzaSyBBi4t1qBXLqhuLw-fnyIEpFn_YBrSCYuI';

/*


  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
// const store = {
//   videos: []
// };

// // TASK: Add the Youtube Search API Base URL here:
// // Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
// const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
// const fetchVideos = function (searchTerm, callback) {
//   const query = {
//     part: 'snippet',
//     key: API_KEY,
//     q: searchTerm,
//   }
//   //To return or not to return
//   return $.getJSON(BASE_URL, query, callback);
// };

//fetchVideos('cats', (callback) => console.log(callback));

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `titvidele`, 
// `thumbnail` which each hold the appropriate values from the API item object. videYou 
// WILL have to dig into several nested properties!vide
// TEST IT! Grab an example API response and send it into the function - make suvidere
// you get back the object you want.vide
// const decorateResponse = function (response) {

//   return response.items.map(function (item) {

//     return {
//       id: item.id.videoId,
//       title: item.snippet.title,
//       thumbnail: item.snippet.thumbnails.default.url
//     }
//   });
// }

// const decoratedResponse = decorateResponse(mockData);

//console.log(decoratedResponse);

//console.log(decorateResponse(mockData));
// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
// const generateVideoItemHtml = function (video) {
//   return `

//     <li data-id="${video.id}">title: "${video.title}"</li>
//     <img src="${video.thumbnail}"/>
//   `;
// };

//console.log(generateVideoItemHtml(decoratedResponse[0]));

//console.log(generateVideoItemHtml(decorateResponse(mockData)));

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
// const addVideosToStore = function (videos) {
//   store.videos = videos;
// };

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
// const render = function () {
//   $('.results').html(store.videos.map(video => generateVideoItemHtml(video)));
//   console.log('render run');
// };

// addVideosToStore(decoratedResponse);
// console.log(decoratedResponse);
// console.log(store);
// console.log(render());


//console.log(generateVideoItemHtml(decoratedResponse[0]))// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
// const handleFormSubmit = function () {
//   $('form').on('click', 'input[type="submit"]', function (event) {
//     event.preventDefault();
//     fetchVideos($('#search-term').val(), function (res) {
//       addVideosToStore(decorateResponse(res));
//       render();
//     })
//   });
// };



// When DOM is ready:
$(function () {
  handleFormSubmit();
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
