const videoList = (function () {
const generateListItem = function (video) {
  return `
  
      <li data-id="${video.id}">title: "${video.title}"</li>
      <li><a href="https://www.youtube.com/watch?v=${video.id}"><img src="${video.thumbnail}"/></a></li>
      <li><a href="https://www.youtube.com/channel/${video.channelId}">Go to channel</a></li>
    `;
};

const render = function () {
    console.log('rendered called');
    const results = store.videos.map(item => generateListItem(item));
    console.log(results);
    $('.results').html(results);
}


const handleFormSubmit = function () {
  $('form').submit(function (event) {
    event.preventDefault();
    console.log("button clicked");  
    api.fetchVideos($('#search-term').val(), function (data){
      console.log(data);
      const results = data.items.map(function (item){
          return {
              id: item.id.videoId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.default.url,
              channelId: item.snippet.channelId
          };
      });
      store.setVideos(results);
      render();
    });
  });
}

const bindEventListeners = function() {
  handleFormSubmit();
}

return {
  generateListItem, render, bindEventListeners
};
})();