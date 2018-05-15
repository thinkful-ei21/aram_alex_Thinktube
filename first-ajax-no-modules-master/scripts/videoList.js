const generateListItem = function (video) {
  return `
  
      <li data-id="${video.id}">title: "${video.title}"</li>
      <img src="${video.thumbnail}"/>
    `;
};

const render1 = (function () {
  let render = function () {
    $('.results').html(store.videos.map(video => generateListItem(video)));
  }

  console.log('render run');

  return {
    render
  }
})();

const handleFormSubmit = function () {
  $('form').on('click', 'input[type="submit"]', function (event) {
    event.preventDefault();
    api.fetchVideos($('#search-term').val(), function (res) {
      store.setVideos(res);
      render1.render();
    })
  });
};