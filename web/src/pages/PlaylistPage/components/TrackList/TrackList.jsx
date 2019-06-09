import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';
import * as SC from './TrackList.styled';

class TrackList extends React.Component {
  render() {
    const { tracks } = this.props;
    return (
      <SC.TrackListContainer>
        {tracks.map((track) => {
          return (typeof track === 'object') && (
            <Track
              key={track._id}
              track={track}
            />
          );
        })}
      </SC.TrackListContainer>
    );
  }
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
};

TrackList.defaultProps = {
  tracks: [],
};

export default TrackList;
