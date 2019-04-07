import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';
import * as SC from './TrackList.styled';

class TrackList extends React.Component {
  render() {
    const { tracks, currentTrackId } = this.props;
    return (
      <SC.TrackListContainer>
        {tracks.map((track) => {
          return (typeof track === 'object') && (
            <Track
              key={track._id}
              track={track.name}
              artist={track.artist}
              cover={track.cover.url}
              selected={currentTrackId === track._id}
              onSelectTrack={() => this.props.onSelectTrack(track._id)}
            />
          );
        })}
      </SC.TrackListContainer>
    );
  }
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  currentTrackId: PropTypes.string,
  onSelectTrack: PropTypes.func.isRequired,
};

TrackList.defaultProps = {
  tracks: [],
  currentTrackId: null,
};

export default TrackList;
