import React from 'react';
import PropTypes from 'prop-types';

import {
  TrackContiner, Cover, TrackInfo, TrackName, ArtistName,
} from './Track.styled';

class Track extends React.Component {
  render() {
    const { track, artist, cover } = this.props;
    return (
      <TrackContiner>
        <Cover src={cover} />
        <TrackInfo>
          <TrackName>{track}</TrackName>
          <ArtistName>{artist}</ArtistName>
        </TrackInfo>
      </TrackContiner>
    );
  }
}

Track.propTypes = {
  track: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

Track.defaultProps = {
  cover: '',
};

export default Track;
