import React from 'react';

import AccountInfo from './components/AccountInfo';
import Track from './components/Track';
import CurrentTrack from './components/CurrentTrack';

import {
  StyledPage, RadiostationSection,
  Title, TracksList, RadiostationInfo,
} from './MyAccountPage.styled';

import { tracks } from './tracks';

class MyAccountPage extends React.Component {
  state = {
    currentTrack: 0,
  };

  onSelectTrack = (trackIndex) => {
    this.setState({
      currentTrack: trackIndex,
    });
  }

  render() {
    const { currentTrack } = this.state;

    return (
      <StyledPage>
        <AccountInfo />

        <RadiostationSection>
          <RadiostationInfo>
            <Title>Radiostation</Title>
            <CurrentTrack
              key={currentTrack}
              track={tracks[currentTrack].track}
              artist={tracks[currentTrack].artist}
              cover={tracks[currentTrack].cover}
              url={tracks[currentTrack].url}
              color={tracks[currentTrack].color}
            />
          </RadiostationInfo>

          <TracksList>
            {tracks.map((track, index) => {
              return (
                <Track
                  key={track.id}
                  track={track.track}
                  artist={track.artist}
                  cover={track.cover}
                  selected={currentTrack === index}
                  onSelectTrack={() => this.onSelectTrack(index)}
                />
              );
            })}
          </TracksList>
        </RadiostationSection>
      </StyledPage>
    );
  }
}

export default MyAccountPage;
