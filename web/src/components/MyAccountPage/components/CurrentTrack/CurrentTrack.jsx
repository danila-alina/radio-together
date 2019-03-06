import React from 'react';
import PropTypes from 'prop-types';

import Sound from 'react-sound';

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
    const { track, artist, cover } = this.props;
    return (
      <CurrentTrackContainer>
        <Sound
          url="https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p17/cc185b7a168944.mp3?extra=7D9NsbnKOhXOEFSwPknb--MqzNFtf-O6W7_zM59oKCj0jkAx9_bKXjd9_HW6d-JR40in27N89r3TErCiGS5pOb797OLQQ7OGY6uqM5UdEEmPMutLwGfLyPpFW2zkg-sNPvcpBSI_v39Gxj6ODg4GyyA"
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
                {Math.floor(position / 1000 / 60)}
                :
                {Math.floor(position / 1000)}
              </Time>
              <ProgressContainer>
                <Progress
                  progress={progress}
                  color="#C688A8"
                />
              </ProgressContainer>
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
