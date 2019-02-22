import React from 'react';
import PropTypes from 'prop-types';

import {
  PlaylistContiner, Cover, GeneratedCover,
  PlaylistImage, PlaylistName,
} from './Playlist.styled';

class Playlist extends React.Component {
  render() {
    const { playlist, cover, number } = this.props;
    const colors = [
      { topColor: '#F1B9D2', bottomColor: '#BBCBED' },
      { topColor: '#ffc3718a', bottomColor: '#ff5f6da6' },
    ];
    return (
      <PlaylistContiner>
        {cover
          ? <Cover src={cover} />
          : (
            <GeneratedCover
              topColor={colors[number].topColor}
              bottomColor={colors[number].bottomColor}
            >
              <PlaylistImage />
            </GeneratedCover>
          )
        }
        <PlaylistName>{playlist}</PlaylistName>
      </PlaylistContiner>
    );
  }
}

Playlist.propTypes = {
  playlist: PropTypes.string.isRequired,
  cover: PropTypes.string,
  number: PropTypes.number,
};

Playlist.defaultProps = {
  cover: '',
  number: 0,
};

export default Playlist;
