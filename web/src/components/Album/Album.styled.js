import styled from 'styled-components';
import * as styles from 'constants/styles';

export const AlbumContiner = styled.div`
  display: flex;
  align-items: center;
  
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  
  :hover {
    background-color: ${styles.backgroundLightSelectedColor};
    border-radius: 5px;
    cursor: pointer;
  }

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
