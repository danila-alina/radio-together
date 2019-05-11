import React from 'react';
import PropTypes from 'prop-types';

import {
  TrackContainer, Cover, TrackInfo, TrackName, ArtistName,
} from './Track.styled';

class Track extends React.Component {
  render() {
    const {
      track, artist, cover, selected, onSelectTrack,
    } = this.props;
    return (
      <TrackContainer selected={selected} onClick={() => onSelectTrack()}>
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
  selected: PropTypes.bool,
  onSelectTrack: PropTypes.func.isRequired,
};

Track.defaultProps = {
  cover: '',
  selected: false,
};

export default Track;
