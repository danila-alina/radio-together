import React from 'react';
import PropTypes from 'prop-types';
import { getGradientColor } from 'services/getGradient';

import {
  PlaylistContiner, CoverContainer, Cover, CoverShadow,
  GeneratedCover, PlaylistImage, PlaylistName,
} from './Playlist.styled';

class Playlist extends React.Component {
  render() {
    const { playlist, cover, id } = this.props;
    const gradientColor = getGradientColor(id);
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
                topColor={gradientColor.topColor}
                bottomColor={gradientColor.bottomColor}
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
  id: PropTypes.string.isRequired,
  playlist: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

Playlist.defaultProps = {
  cover: '',
};

export default Playlist;
