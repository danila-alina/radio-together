import React from 'react';

import RadiostationCard from 'components/RadiostationCard';
import {
  Page, SectionTitle, Section,
  RadiostationsContainer,
} from './HomePage.styled';

class HomePage extends React.Component {
  render() {
    return (
      <Page>
        <Section>
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
        </Section>
        <Section>
          <SectionTitle>
            Popular Tracks
          </SectionTitle>
        </Section>
      </Page>
    );
  }
}

export default HomePage;
