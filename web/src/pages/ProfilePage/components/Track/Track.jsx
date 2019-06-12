import React from 'react';
import PropTypes from 'prop-types';

import {
  TrackContainer, Cover, TrackInfo, TrackName, ArtistName,
} from './Track.styled';

class Track extends React.Component {
  render() {
    const {
      track, artist, cover,
    } = this.props;
    return (
      <TrackContainer>
        <Cover src={cover} />
        <TrackInfo>
          <TrackName>{track}</TrackName>
          <ArtistName>{artist}</ArtistName>
        </TrackInfo>
      </TrackContainer>
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
