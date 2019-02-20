import React from 'react';

import Track from './components/Track';
import UserAvatar from './components/UserAvatar';

import {
  StyledPage, AccountInfoSection, UserInfo, UserName,
  UserPreferences, UserFollowers, UserFollowing, TextBold,
  RadiostationSection, Title, CurrentTrackContainer, Cover,
  TrackInfo, TrackName, ArtistName, TracksList, TrackProgressContainer,
  PlayButton, Time, Progress, ShuffleButton,
} from './MyAccountPage.styled';

class MyAccountPage extends React.Component {
  render() {
    return (
      <StyledPage>
        <AccountInfoSection>
          <UserAvatar />
          <UserInfo>
            <UserName>Alina Arlova</UserName>
            <UserPreferences>
              <UserFollowers>
                <TextBold>90&nbsp;</TextBold>
                Followers
              </UserFollowers>
              <UserFollowing>
                Following:&nbsp;
                <TextBold>91</TextBold>
              </UserFollowing>
            </UserPreferences>
          </UserInfo>
        </AccountInfoSection>

        <RadiostationSection>
          <Title>Radiostation</Title>
          <CurrentTrackContainer>
            <Cover src="https://i1.sndcdn.com/artworks-000162127557-hsogs1-t500x500.jpg" />
            <TrackInfo>
              <TrackName>Look Around</TrackName>
              <ArtistName>Native Spirit</ArtistName>
            </TrackInfo>
            <TrackProgressContainer>
              <PlayButton />
              <Time>0:40</Time>
              <Progress />
              <Time>3:10</Time>
              <ShuffleButton />
            </TrackProgressContainer>
          </CurrentTrackContainer>
          <TracksList>
            <Track
              track="Discovery"
              artist="Kailee Morgue"
              cover="https://cdn61.zvooq.com/pic?type=release&id=6269006&size=500x500&ext=jpg"
            />
            <Track
              track="Look Around"
              artist="Native Spirit"
              cover="https://i1.sndcdn.com/artworks-000162127557-hsogs1-t500x500.jpg"
              selected
            />
            <Track
              track="Blame"
              artist="Kyle"
              cover="https://i1.sndcdn.com/artworks-000180119811-wgpequ-t500x500.jpg"
            />
            <Track
              track="Breezeblocks"
              artist="alt-J"
              cover="https://www.startalkradio.net/wp-content/uploads/2015/05/alt-j-an-awesome-wave-600x600.jpg"
            />
            <Track
              track="Touch"
              artist="MAALA"
              cover="https://images.genius.com/cc3f4f45641b5bab6ed527a82f119e21.1000x1000x1.jpg"
            />
          </TracksList>
        </RadiostationSection>
      </StyledPage>
    );
  }
}

export default MyAccountPage;
