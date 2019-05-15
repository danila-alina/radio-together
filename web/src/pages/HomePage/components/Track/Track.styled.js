import styled from 'styled-components';
import { Plus, Star } from 'styled-icons/feather';
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
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TrackRating = styled.div`
  display: none;
  margin-right: 5px;
`;

export const RatingStar = styled(Star)`
  width: 15px;
  fill: ${props => props.highlighted ? styles.selectedColor : 'transparent'};
  color: ${props => props.highlighted ? styles.selectedColor : styles.iconHoverColor};
`;

export const TrackName = styled.p`
  font-weight: ${styles.fontMedium};
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  
  :hover ${TrackRating} {
    display: block;
  }
  
  :hover ${TrackName} {
    max-width: 60%;
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
  flex: 1 0 0;
  overflow: hidden;
`;

export const ArtistName = styled.div`
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
