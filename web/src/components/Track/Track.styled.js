import styled from 'styled-components';
import * as styles from 'constants/styles';

export const TrackContiner = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 15px;
  :first-child {
    margin-top: 0;
  }
`;

export const Cover = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const TrackInfo = styled.div`
  margin-left: 15px;
`;

export const TrackName = styled.div`
  font-weight: ${styles.fontMedium};
`;

export const ArtistName = styled.div`
  margin-top: 10px;
`;
