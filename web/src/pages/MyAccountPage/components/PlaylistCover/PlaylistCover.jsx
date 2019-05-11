import React from 'react';
import PropTypes from 'prop-types';

import { getGradientColor } from 'services/getGradient';

import * as SC from './PlaylistCover.styled';

class PlaylistCover extends React.Component {
  render() {
    const { cover, playlistId } = this.props;
    const gradientColor = getGradientColor(playlistId);
    return (
      <SC.PlaylistCover>
        {cover
          ? <SC.Cover cover={cover} />
          : (
            <SC.GeneratedCover
              topColor={gradientColor.topColor}
              bottomColor={gradientColor.bottomColor}
            >
            </SC.GeneratedCover>
          )
        }
      </SC.PlaylistCover>
    );
  }
}

PlaylistCover.propTypes = {
  cover: PropTypes.string,
  playlistId: PropTypes.string,
};

PlaylistCover.defaultProps = {
  cover: '',
  playlistId: '',
};

export default PlaylistCover;
