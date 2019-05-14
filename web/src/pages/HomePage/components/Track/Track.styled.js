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
  background-color: ${props => props.background && styles.backgroundLightSelectedColor};
  
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
  border: 1px solid ${styles.grayColor};
`;

export const TrackInfo = styled.div`
  margin-left: 15px;
  width: 100%;
`;

export const TrackName = styled.p`
  font-weight: ${styles.fontMedium};
  max-width: 65%;
`;

export const ArtistName = styled.div`
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
