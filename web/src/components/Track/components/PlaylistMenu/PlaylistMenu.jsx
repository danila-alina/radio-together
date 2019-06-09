import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import * as playlistSelectors from 'resources/playlist/playlist.selectors';
import * as SC from './PlaylistMenu.styled';

class PlaylistMenu extends React.Component {
  handleClickOutside = (event) => {
    this.props.toggleMenu();
  }

  render() {
    const { playlists } = this.props;
    const renderOptions = playlists.map((playlist) => {
      return (
        <SC.Option key={playlist._id} onClick={() => this.props.onAddToPlaylist(playlist._id)}>
          {playlist.name}
        </SC.Option>
      );
    });
    return (
      <SC.Menu>
        {renderOptions}
      </SC.Menu>
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
)(onClickOutside(PlaylistMenu));
