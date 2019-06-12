import styled from 'styled-components';
import * as styles from 'constants/styles';

export const TrackContainer = styled.div`
  width: 100%;
  padding: 10px 30px;
  
  display: flex;
  align-items: center;
  
  background-color: ${props => props.selected && styles.backgroundSelectedColor};
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
