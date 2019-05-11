import React from 'react';

import RadiostationCard from 'components/RadiostationCard';
import Track from 'components/Track';
import Album from 'components/Album';
import {
  Page, SectionTitle, Section, RadiostationsContainer,
  TracksList, ListPortion, AlbumsList,
} from './RecommendationsPage.styled';

class RecommendationsPage extends React.Component {
  render() {
    return (
      <Page>
        <Section>
          <SectionTitle>
            Radiostations from your friends
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
          </RadiostationsContainer>
        </Section>
        <Section>
          <SectionTitle>
            Tracks you may like
          </SectionTitle>
          <TracksList>
            <ListPortion>
              <Track
                track="Сон"
                artist="Мы"
                cover="https://cdnimg.zaycev.net/commonImage/124020_square250.jpg"
              />
              <Track
                track="Bad guy"
                artist="Billie Eilish"
                cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQMVFH0o5joDbqD8I7J9-lcg-22GFODLmgHhCL-U9zh1RSi3U"
              />
              <Track
                track="Случайная любовь"
                artist="Свидание"
                cover="https://images.genius.com/7c9fc89708177c9f4b9bae5af6935256.1000x1000x1.jpg"
              />
            </ListPortion>
            <ListPortion>
              <Track
                track="Outside"
                artist="Bea Miller"
                cover="https://bloximages.chicago2.vip.townnews.com/bgfalconmedia.com/content/tncms/assets/v3/editorial/b/9e/b9e682b4-279e-11e8-a842-97fe877d3c6a/5aa943acd035d.image.jpg"
              />
              <Track
                track="Human"
                artist="Sevdaliza"
                cover="http://muzzov.net/uploads/posts/2018-01/medium/1514796067_m1000x1000.jpg"
              />
              <Track
                track="Karma"
                artist="Tom Walker"
                cover="https://images.genius.com/f62270fa21dddc2b5f90a3aadcfb1ee0.640x640x1.jpg"
              />
            </ListPortion>
          </TracksList>
        </Section>
      </Page>
    );
  }
}

export default RecommendationsPage;
