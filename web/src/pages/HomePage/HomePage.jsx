import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RadiostationCard from 'components/RadiostationCard';
import Album from 'components/Album';
import Loader from 'components/Loader';

import * as playlistActions from 'resources/playlist/playlist.actions';
import * as trackSelectors from 'resources/track/track.selectors';
import * as trackActions from 'resources/track/track.actions';
import TracksList from './components/TracksList';

import * as SC from './HomePage.styled';

class HomePage extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.props.getPlaylists();
    this.props.getPopularTracks()
      .then(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading } = this.state;
    const { popularTracks } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <SC.Page>
        <SC.RadiostationSection>
          <SC.SectionTitle>
            Radiostations popular right now
          </SC.SectionTitle>
          <SC.RadiostationsContainer>
            <RadiostationCard
              userId="5cfd7b992dc403b5ae62cdeb"
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
          </SC.RadiostationsContainer>
        </SC.RadiostationSection>
        <SC.TracksSection>
          <SC.TracksSectionTitle>
            Popular Tracks
          </SC.TracksSectionTitle>
          <TracksList tracks={popularTracks.slice(0, 8)} />
        </SC.TracksSection>
        <SC.AlbumsSection>
          <SC.AlbumsSectionTitle>
            Popular Albums
          </SC.AlbumsSectionTitle>
          <SC.AlbumsList>
            <SC.ListPortion>
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
            </SC.ListPortion>
            <SC.ListPortion>
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
            </SC.ListPortion>
          </SC.AlbumsList>
        </SC.AlbumsSection>
      </SC.Page>
    );
  }
}

HomePage.propTypes = {
  getPlaylists: PropTypes.func.isRequired,
  getPopularTracks: PropTypes.func.isRequired,
  popularTracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    composer: PropTypes.string,
    genres: PropTypes.array,
    duration: PropTypes.number,
    appleMusicId: PropTypes.string,
    cover: PropTypes.shape,
  })).isRequired,
};

const mapStateToProps = state => ({
  popularTracks: trackSelectors.getPopularTracks(state),
});

const mapDispatchToProps = {
  getPlaylists: playlistActions.getPlaylists,
  getPopularTracks: trackActions.getPopularTracks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
