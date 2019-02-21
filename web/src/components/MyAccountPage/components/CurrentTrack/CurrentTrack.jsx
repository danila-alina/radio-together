import React from 'react';
import PropTypes from 'prop-types';

import {
  CurrentTrackContainer, Cover,
  TrackInfo, TrackName, ArtistName, TrackInfoContainer,
  PlayButton, Time, Progress, ShuffleButton, TrackInfoName, TrackInfoProgress,
  TrackListenersContainer, ListenerAvatar, ListenerName, ListenersText, ListenersAmount,
} from './CurrentTrack.styled';

class CurrentTrack extends React.Component {
  state ={
    shuffle: false,
  }

  onShuffleClick = () => {
    this.setState((state) => {
      return {
        shuffle: !state.shuffle,
      };
    });
  }

  render() {
    const { shuffle } = this.state;
    const { track, artist, cover } = this.props;
    return (
      <CurrentTrackContainer>
        <Cover src={cover} />
        <TrackInfoContainer>
          <TrackInfo>
            <TrackInfoName>
              <TrackName>{track}</TrackName>
              <ArtistName>{artist}</ArtistName>
            </TrackInfoName>
            <TrackInfoProgress>
              <PlayButton />
              <Time>0:40</Time>
              <Progress />
              <Time>3:10</Time>
              <ShuffleButton
                onClick={this.onShuffleClick}
                enabled={shuffle}
                color="#C688A8"
              />
            </TrackInfoProgress>
          </TrackInfo>
          <TrackListenersContainer>
            <ListenerAvatar src="https://i.pinimg.com/280x280_RS/51/f7/86/51f786a06a9be5e4e7bc0699e311e340.jpg" />
            <ListenersText>
              <ListenerName>
                {'danilyanich'}
                &nbsp;
              </ListenerName>
              listens with
              <ListenersAmount>
                &nbsp;
                {15}
                &nbsp;
              </ListenersAmount>
              others
            </ListenersText>
          </TrackListenersContainer>
        </TrackInfoContainer>
      </CurrentTrackContainer>
    );
  }
}

CurrentTrack.propTypes = {
  track: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

CurrentTrack.defaultProps = {
  cover: '',
};

export default CurrentTrack;
