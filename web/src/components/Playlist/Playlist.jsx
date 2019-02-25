import React from 'react';
import PropTypes from 'prop-types';

import {
  PlaylistContiner, CoverContainer, Cover, CoverShadow,
  GeneratedCover, PlaylistImage, PlaylistName,
} from './Playlist.styled';

class Playlist extends React.Component {
  render() {
    const { playlist, cover, number } = this.props;
    const colors = [
      { topColor: '#F1B9D2', bottomColor: '#BBCBED' },
      { topColor: '#ffc3718a', bottomColor: '#ff5f6da6' },
      { topColor: '#DDD6F3', bottomColor: '#FAACA8' },
      { topColor: '#ffafbd', bottomColor: '#c9ffbf' },
    ];
    return (
      <PlaylistContiner>
        {cover
          ? (
            <CoverContainer>
              <CoverShadow cover={cover} />
              <Cover cover={cover} />
            </CoverContainer>
          )
          : (
            <CoverContainer>
              <GeneratedCover
                topColor={colors[number].topColor}
                bottomColor={colors[number].bottomColor}
              >
                <PlaylistImage />
              </GeneratedCover>
            </CoverContainer>
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
