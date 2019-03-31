import styled from 'styled-components';
import * as styles from 'constants/styles';
import { MoreHorizontal } from 'styled-icons/feather';
import { CompactDisc } from 'styled-icons/fa-solid';
import { Edit } from 'styled-icons/fa-regular';
import { Close } from 'styled-icons/material';

export const Page = styled.div`
`;

export const PlaylistInfoContainer = styled.div`
  padding: 30px;
  display: flex;
`;

export const Playlist = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${styles.fontLight};
`;

export const FileInputContaier = styled.label`
  display: none;
  &:hover {
    cursor: pointer;
  }
`;

export const FileInput = styled.input.attrs({
  type: 'file',
})`
  display: none;
`;

export const PlaylistCover = styled.div`
  position: relative;
  &:hover {
    filter: brightness(95%);
  }
  &:hover ${FileInputContaier} {
    display: block;
    position: absolute;
    bottom: 55px;
    left: 12px;
    font-size: 14px;
    font-weight: ${styles.fontLight};
    background-color: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border-radius: 10px;
  }
`;

export const Cover = styled.div`
  background-size: 100% auto;
  background-image: url(${props => props.cover});
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const GeneratedCover = styled.div`
  background: linear-gradient(${props => props.topColor}, ${props => props.bottomColor});
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaylistImage = styled(CompactDisc)`
  width: 80px;
  height: 80px;
  color: ${styles.whiteColor};
  opacity: 0.5;
`;

export const PlaylistInfo = styled.div`
  margin-left: 20px;
  width: 250px;
`;

export const PlaylistName = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

export const PlaylistAdditional = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

export const PlaylistOptions = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;
  position: relative;
`;

export const MoreButton = styled(MoreHorizontal)`
  width: 20px;
  padding: 2px;
  margin-left: 5px;
  color: ${styles.iconColor};
  
  :hover {
    cursor: pointer;
    color: ${styles.iconHoverColor};
    background-color: ${styles.backgroundGrayColor};
    border-radius: 11px;
  }
`;

export const PlaylistNameInput = styled.input`
  border: 1px solid ${styles.backgroundGrayColor};
  background-color: ${styles.backgroundGrayColor};
  border-radius: 10px;
  padding: 5px;
  margin: 2px 0px 0px -6px;
  color: ${styles.fontColor};
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
`;

export const SaveButton = styled.div`
  color: ${styles.fontSecondaryColor};
  font-size: 14px;
  font-weight: ${styles.fontLight};
  text-transform: uppercase;
  
  :hover {
    cursor: pointer;
    color: ${styles.fontColor};
  }
`;

export const CancelButton = styled(Close)`
  width: 17px;
  color: ${styles.iconColor};
  margin-left: 5px;

  :hover {
    cursor: pointer;
    color: ${styles.iconHoverColor};
  }
`;

export const EditButton = styled(Edit)`
  width: 18px;
  color: ${styles.iconColor};

  :hover {
    cursor: pointer;
    color: ${styles.iconHoverColor};
  }
`;

export const TrackListContainer = styled.div`
`;
