const appleService = require('services/apple.service');
const trackService = require('resources/track/track.service');

module.exports.getPopularTracks = async (ctx) => {
  const { results } = await appleService.getPopularTracks();
  const tracks = results.songs.find(res => res.chart === 'most-played').data.map((track) => {
    const { artwork } = track.attributes;
    return {
      name: track.attributes.name,
      artist: track.attributes.artistName,
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
  });

  ctx.body = {
    tracks,
  };
};

module.exports.rateTrack = async (ctx) => {
  console.log('----------------')
  console.log(ctx.params)
};
