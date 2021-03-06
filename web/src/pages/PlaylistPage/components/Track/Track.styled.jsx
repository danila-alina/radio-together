import styled from 'styled-components';
import * as styles from 'constants/styles';
import * as SC from '../PlayButton/PlayButton.styled';

export const TrackContainer = styled.div`
  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  
  display: flex;
  align-items: center;
  
  background-color: ${props => props.selected && styles.backgroundSelectedColor};
  border-radius: 5px;

  :hover ${SC.PlayButton} {
    display: block;
  }
  
  :hover ${SC.PauseButton} {
    display: block;
  }
  
  :hover {
    border-radius: 5px;
    background-color: ${(props) => {
    return props.selected
      ? styles.backgroundSelectedColor
      : styles.backgroundLightSelectedColor;
  }};
    cursor: pointer;
  }
`;

export const CoverContainer = styled.div`
  position: relative;
`;

export const Cover = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid ${styles.backgroundGrayColor};
`;

export const TrackInfo = styled.div`
  margin-left: 20px;
`;

export const TrackName = styled.div`
  font-size: 16px;
  font-weight: ${styles.fontMedium};
`;

export const ArtistName = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
