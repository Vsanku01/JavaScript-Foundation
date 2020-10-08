var handleAPIResponse = function (response) {
  var videos = response.list;
  var player = DM.player(document.getElementById('player'), {
    video: videos.shift().id
  });

  // At the end of a video, load the next video if any
  player.addEventListener('end', function (e)
  {
    var nextVideo = videos.shift();
    if (nextVideo) {
      e.target.load(nextVideo.id);
    }
  });
};

DM.api('/videos', {
  filters: 'buzz',
  fields: 'id',
  limit: 100
}, handleAPIResponse);