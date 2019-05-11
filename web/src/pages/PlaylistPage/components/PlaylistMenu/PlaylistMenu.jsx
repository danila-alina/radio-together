import React from 'react';
import PropTypes from 'prop-types';

import MenuPopup from 'components/MenuPopup';

class PlaylistMenu extends React.Component {
  render() {
    const { isSetToRadiostation } = this.props;
    return (
      <MenuPopup
        options={[{
          id: 1,
          name: 'Delete Playlist',
          action: this.props.onDeletePlaylist,
        }, {
          id: 2,
          name: isSetToRadiostation ? 'Unset from Radiostation' : 'Set to Radiostation',
          action: isSetToRadiostation
            ? this.props.onUnsetFromRadiostation
            : this.props.onSetToRadiostation,
        }]}
        toggleMenu={this.props.toggleMenu}
      />
    );
  }
}

PlaylistMenu.propTypes = {
  onDeletePlaylist: PropTypes.func.isRequired,
  onSetToRadiostation: PropTypes.func.isRequired,
  onUnsetFromRadiostation: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  isSetToRadiostation: PropTypes.bool.isRequired,
};

export default PlaylistMenu;
