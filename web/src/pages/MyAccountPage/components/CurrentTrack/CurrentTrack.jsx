import React from 'react';
import PropTypes from 'prop-types';

import Sound from 'react-sound';

import * as styles from 'constants/styles';

import {
  CurrentTrackContainer, Cover,
  TrackInfo, TrackName, ArtistName, TrackInfoContainer, PauseButton, ProgressContainer,
  PlayButton, Time, Progress, ShuffleButton, TrackInfoName, TrackInfoProgress,
  TrackListenersContainer, ListenerAvatar, ListenerName, ListenersText, ListenersAmount,
} from './CurrentTrack.styled';

class CurrentTrack extends React.Component {
  state ={
    shuffle: false,
    progress: 0,
    position: 0,
    status: null,
  }

  onShuffleClick = () => {
    this.setState((state) => {
      return {
        shuffle: !state.shuffle,
      };
    });
  }

  onPlayClick = () => {
    this.setState({
      status: 'PLAYING',
    });
  }

  onPauseClick = () => {
    this.setState({
      status: 'PAUSED',
    });
  }

  onPlaying = ({ position, duration }) => {
    const progress = position / duration * 100;
    this.setState({
      progress,
      position,
    });
  }

  render() {
    const {
      shuffle, status, position, progress,
    } = this.state;
    const {
      track, artist, cover, url, color,
    } = this.props;
    const trackMinutes = Math.floor(position / 1000 / 60);
    const trackSeconds = Math.floor((position / 1000) % 60);

    return (
      <CurrentTrackContainer>
        <Sound
          url={url}
          playStatus={status}
          position={position}
          onPlaying={this.onPlaying}
        />
        <Cover src={cover} />
        <TrackInfoContainer>
          <TrackInfo>
            <TrackInfoName>
              <TrackName>{track}</TrackName>
              <ArtistName>{artist}</ArtistName>
            </TrackInfoName>
            <TrackInfoProgress>
              {status === 'PLAYING'
                ? (
                  <PauseButton
                    onClick={this.onPauseClick}
                  />
                )
                : (
                  <PlayButton
                    onClick={this.onPlayClick}
                  />
                )
              }
              <Time>
                {trackMinutes}
                :
                {trackSeconds < 10 ? `0${trackSeconds}` : trackSeconds}
              </Time>
              <ProgressContainer>
                <Progress
                  progress={progress}
                  color={color}
                />
              </ProgressContainer>
              <Time>3:00</Time>
              <ShuffleButton
                onClick={this.onShuffleClick}
                enabled={shuffle}
                color={color}
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
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

CurrentTrack.defaultProps = {
  cover: '',
  color: styles.selectedColor,
};

export default CurrentTrack;
