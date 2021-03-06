import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as playlistActions from 'resources/playlist/playlist.actions';

import Track from 'components/Track';
import * as SC from './TracksList.styled';

class TracksList extends React.Component {
  onAddTrackToPlaylist = (trackId, playlistId) => {
    const { addTrackToPlaylist } = this.props;
    addTrackToPlaylist(trackId, playlistId);
  }

  render() {
    const { tracks } = this.props;
    return (
      <SC.TracksListContainer>
        <SC.ListPortion>
          {tracks.slice(0, 4).map(track => (
            <Track
              key={track._id}
              track={track}
              addTrackToPlaylist={this.onAddTrackToPlaylist}
            />
          ))}
        </SC.ListPortion>
        <SC.ListPortion>
          {tracks.slice(-4).map(track => (
            <Track
              key={track._id}
              track={track}
              addTrackToPlaylist={this.onAddTrackToPlaylist}
            />
          ))}
        </SC.ListPortion>
      </SC.TracksListContainer>
    );
  }
}

TracksList.propTypes = {
  addTrackToPlaylist: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    composer: PropTypes.string,
    genres: PropTypes.array,
    duration: PropTypes.number,
    appleMusicId: PropTypes.string,
    cover: PropTypes.shape,
  })),
};

TracksList.defaultProps = {
  tracks: [],
};

const mapDispatchToProps = {
  addTrackToPlaylist: playlistActions.addTrackToPlaylist,
};

export default connect(
  null,
  mapDispatchToProps,
)(TracksList);
