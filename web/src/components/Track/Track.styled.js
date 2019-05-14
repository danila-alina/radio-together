import styled from 'styled-components';
import { Plus } from 'styled-icons/feather';
import * as styles from 'constants/styles';

export const AddToPlaylistButton = styled(Plus)`
  display: none;
  width: 23px;
  color: ${styles.iconColor};
  
  :hover {
    cursor: pointer;
    color: ${styles.iconHoverColor};
  }
`;

export const PlaylistMenu = styled.div`
  position: absolute;
  background-color: white;
  width: 100px;
  hegiht: 50px;
`;

export const AdditionalInfo = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const TrackContiner = styled.div`
  position: relative;
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
  
  :hover ${AddToPlaylistButton} {
    display: block;
  }
`;

export const Cover = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const TrackInfo = styled.div`
  padding-left: 15px;
  flex-grow: 1;
  
  overflow: hidden;
`;

export const TrackName = styled.div`
  max-width: 80%;

  font-weight: ${styles.fontMedium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtistName = styled.div`
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
