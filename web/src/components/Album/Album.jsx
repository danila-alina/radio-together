import React from 'react';
import PropTypes from 'prop-types';

import {
  AlbumContiner, Cover, AlbumInfo, ArtistName, AlbumName,
} from './Album.styled';

class Album extends React.Component {
  render() {
    const { album, artist, cover } = this.props;
    return (
      <AlbumContiner>
        <Cover src={cover} />
        <AlbumInfo>
          <AlbumName>{album}</AlbumName>
          <ArtistName>{artist}</ArtistName>
        </AlbumInfo>
      </AlbumContiner>
    );
  }
}

Album.propTypes = {
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

Album.defaultProps = {
  cover: '',
};

export default Album;
