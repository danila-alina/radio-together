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
              colors={{ top: 'A67BC1', bottom: '#EAA8DF' }}
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
