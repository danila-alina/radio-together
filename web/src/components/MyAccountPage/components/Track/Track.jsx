import React from 'react';
import PropTypes from 'prop-types';

import {
  TrackContainer, Cover, TrackInfo, TrackName, ArtistName,
} from './Track.styled';

class Track extends React.Component {
  render() {
    const {
      track, artist, cover, selected,
    } = this.props;
    return (
      <TrackContainer selected={selected}>
        <Cover src={cover} selected={selected} />
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
  selected: PropTypes.bool,
};

Track.defaultProps = {
  cover: '',
  selected: false,
};

export default Track;
