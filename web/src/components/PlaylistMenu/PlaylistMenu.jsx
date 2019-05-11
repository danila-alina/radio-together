import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as playlistSelectors from 'resources/playlist/playlist.selectors';
import MenuPopup from 'components/MenuPopup';

class PlaylistMenu extends React.Component {
  render() {
    const { playlists } = this.props;
    return (
      <MenuPopup
        left={180}
        top={5}
        options={playlists.map(playlist => ({
          id: playlist._id,
          name: playlist.name,
          action: () => this.props.onAddToPlaylist(playlist._id),
        }))}
        toggleMenu={this.props.toggleMenu}
      />
    );
  }
}

PlaylistMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  onAddToPlaylist: PropTypes.func.isRequired,
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  playlists: playlistSelectors.getPlaylists(state),
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistMenu);
