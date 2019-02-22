import styled from 'styled-components';
import * as styles from 'constants/styles';

export const AlbumContiner = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 15px;
  :first-child {
    margin-top: 0;
  }
`;

export const Cover = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

export const AlbumInfo = styled.div`
  margin-left: 15px;
`;

export const AlbumName = styled.div`
  font-weight: ${styles.fontMedium};
`;

export const ArtistName = styled.div`
  margin-top: 10px;
`;
