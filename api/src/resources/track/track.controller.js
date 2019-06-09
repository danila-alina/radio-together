const appleService = require('services/apple.service');
const trackService = require('resources/track/track.service');

const getAppleTrackInfo = (track) => {
  const { artwork } = track.attributes;
  return {
    name: track.attributes.name,
    artist: track.attributes.artistName,
    url: track.attributes.url,
    album: track.attributes.albumName,
    composer: track.attributes.composerName || '',
    genres: track.attributes.genreNames,
    duration: track.attributes.durationInMillis,
    appleMusicId: track.id,
    cover: {
      url: artwork.url.replace('{w}', 500).replace('{h}', 500),
      colors: [artwork.bgColor],
    },
  };
};

module.exports.getPopularTracks = async (ctx) => {
  const { results } = await appleService.getPopularTracks();
  const appleTracks = results.songs.find(res => res.chart === 'most-played').data.map((track) => {
    const resultTrack = getAppleTrackInfo(track);
    return resultTrack;
  });

  const tracks = await trackService.addNewTracks(appleTracks);

  ctx.body = {
    tracks,
  };
};

module.exports.rateTrack = async (ctx) => {
  const { userId } = ctx.state;
  const { trackId } = ctx.params;

  await trackService.rateTrack(userId, trackId);

  ctx.body = {};
};

module.exports.searchTracks = async (ctx) => {
  const { searchValue } = ctx.params;
  const { results } = await appleService.searchTracks(encodeURI(searchValue));

  if (!results.songs) {
    ctx.body = {
      tracks: [],
    };
    return;
  }

  const appleTracks = results.songs.data.map((track) => {
    const resultTrack = getAppleTrackInfo(track);
    return resultTrack;
  });

  const tracks = await trackService.addNewTracks(appleTracks);

  ctx.body = {
    tracks,
  };
};
