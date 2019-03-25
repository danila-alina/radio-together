import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPlaylists, addPlaylist } from 'resources/playlist/playlist.actions';
import * as playlistSelectors from 'resources/playlist/playlist.selectors';

import Playlist from 'components/Playlist';
import {
  Page, Section, SectionTitle, Playlists,
  NewPlaylist, NewPlaylistImage,
} from './MyMusicPage.styled';

class MyMusicPage extends React.Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  onAddPlaylistClick = () => {
    this.props.addPlaylist();
  }

  render() {
    const playlists = this.props.playlists || [];
    console.log(playlists);
    const renderPlaylists = playlists.map((playlist) => {
      return (
        <Playlist
          key={playlist.id}
          playlist={playlist.name}
          cover={playlist.cover}
        />
      );
    });

    return (
      <Page>
        <Section>
          <SectionTitle>Playlists</SectionTitle>
          <Playlists>
            {renderPlaylists}
            <NewPlaylist onClick={this.onAddPlaylistClick}>
              <NewPlaylistImage />
              Add Playlist
            </NewPlaylist>
          </Playlists>
        </Section>
      </Page>
    );
  }
}

MyMusicPage.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlaylists: PropTypes.func.isRequired,
  addPlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  playlists: playlistSelectors.getPlaylists(state),
});

const mapDispatchToProps = {
  getPlaylists,
  addPlaylist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyMusicPage);
