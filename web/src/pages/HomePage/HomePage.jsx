import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RadiostationCard from 'components/RadiostationCard';
import Track from 'components/Track';
import Album from 'components/Album';

import * as playlistActions from 'resources/playlist/playlist.actions';

import {
  Page, SectionTitle, RadiostationsContainer,
  TracksList, ListPortion, AlbumsList, RadiostationSection,
  TracksSection, TracksSectionTitle, AlbumsSection,
} from './HomePage.styled';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    return (
      <Page>
        <RadiostationSection>
          <SectionTitle>
            Radiostations popular right now
          </SectionTitle>
          <RadiostationsContainer>
            <RadiostationCard
              colors={{ top: '#A67BC1', bottom: '#EAA8DF' }}
              userName="Dan Krachkouski"
              radiostationName="Kotik"
            />
            <RadiostationCard
              colors={{ top: '#8CA6DB', bottom: '#B993D6' }}
              userName="Polina Rudenko"
              radiostationName="Polana"
            />
            <RadiostationCard
              colors={{ top: '#FAACA8', bottom: '#DDD6F3' }}
              userName="John Riddle"
              radiostationName="Accent"
            />
            <RadiostationCard
              colors={{ top: '#EF629F', bottom: '#EECDA3' }}
              userName="Allen Parks"
              radiostationName="Sunrise"
            />
          </RadiostationsContainer>
        </RadiostationSection>
        <TracksSection>
          <TracksSectionTitle>
            Popular Tracks
          </TracksSectionTitle>
          <TracksList>
            <ListPortion>
              <Track
                track="In My Mind In My Head In My Mind In My Head"
                artist="Dynoro, Gigi D'Agostino"
                cover="http://www.europaplus.ru/upload/thumb/performer_308x308/001/024/02383/5ac62e20f1805_Dynoro_feat_Gigi_DAgostino_-_In_My_Mind_800.jpg"
              />
              <Track
                track="Natural"
                artist="Imagine Dragons"
                cover="https://avatars.yandex.net/get-music-content/117546/b5c6945b.a.6017186-1/m1000x1000"
              />
              <Track
                track="Shadow"
                artist="Triplo Max"
                cover="https://avatars.yandex.net/get-music-content/142001/48656386.a.6103179-1/m1000x1000"
              />
            </ListPortion>
            <ListPortion>
              <Track
                track="Say My Name"
                artist="David Guetta, Bebe Rexha, J. Balvin"
                cover="https://muzonov.net/uploads/posts/2018-09/medium/1536750142_1.jpg"
              />
              <Track
                track="Let You Love Me"
                artist="Rita Ora"
                cover="http://eurohittop40.ru/images/discs/1186814/1186814.jpg"
              />
              <Track
                track="Baby"
                artist="Clean Bandit, Luis Fonsi, Marina"
                cover="https://www.letrasdemusiquita.com/wp-content/uploads/2018/11/e8f2b3ac3a4.1000x1000x1.jpg"
              />
            </ListPortion>
          </TracksList>
        </TracksSection>
        <AlbumsSection>
          <SectionTitle>
            Last Released Albums
          </SectionTitle>
          <AlbumsList>
            <ListPortion>
              <Album
                album="VIDA"
                artist="Luis Fonsi"
                cover="https://upload.wikimedia.org/wikipedia/en/8/8f/Luis_Fonsi_-_Vida.png"
              />
              <Album
                album="DA"
                artist="MATRANG"
                cover="https://the-flow.ru/uploads/images/catalog/element/5c536e3e84305.jpg"
              />
            </ListPortion>
            <ListPortion>
              <Album
                album="Got To Keep On"
                artist="The Chemical Brothers"
                cover="https://www.magneticmag.com/.image/t_share/MTYxNzY2MTMzMDMwOTg3MDU0/cb_no_geography_packshot_01.jpg"
              />
              <Album
                album="Ripples"
                artist="Ian Brown"
                cover="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/IanBrown-Ripples.jpg/220px-IanBrown-Ripples.jpg"
              />
            </ListPortion>
          </AlbumsList>
        </AlbumsSection>
      </Page>
    );
  }
}

HomePage.propTypes = {
  getPlaylists: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getPlaylists: playlistActions.getPlaylists,
};

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
