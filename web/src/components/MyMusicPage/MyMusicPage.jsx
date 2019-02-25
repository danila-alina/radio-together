import React from 'react';

import Playlist from 'components/Playlist';
import {
  Page, Section, SectionTitle, Playlists,
  NewPlaylist, NewPlaylistImage,
} from './MyMusicPage.styled';

class MyMusicPage extends React.Component {
  render() {
    return (
      <Page>
        <Section>
          <SectionTitle>Playlists</SectionTitle>
          <Playlists>
            <Playlist
              playlist="Music for travel"
              cover="https://pp.userapi.com/c848616/v848616352/139883/WyWFdw5GTGY.jpg"
            />
            <Playlist
              playlist="Inspiration"
              cover="https://pp.userapi.com/c845017/v845017351/1aaded/t8S8AOntQHc.jpg"
            />
            <Playlist
              playlist="Beauty"
              cover="https://pp.userapi.com/c845218/v845218376/1b2654/_XLGKD58fws.jpg"
            />
            <Playlist
              playlist="New Playlist 1"
              number={0}
            />
            <Playlist
              playlist="New Playlist 2"
              number={1}
            />
            <Playlist
              playlist="New Playlist 3"
              number={2}
            />
            <Playlist
              playlist="New Playlist 4"
              number={3}
            />
            <NewPlaylist>
              <NewPlaylistImage />
              Add Playlist
            </NewPlaylist>
          </Playlists>
        </Section>
      </Page>
    );
  }
}

export default MyMusicPage;
