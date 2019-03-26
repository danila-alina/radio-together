import styled from 'styled-components';
import * as styles from 'constants/styles';
import { CompactDisc } from 'styled-icons/fa-solid';

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
  margin-top: 5px;
`;

export const ChangeCover = styled.div`
  display: none;
  &:hover {
    cursor: pointer;
  }
`;

export const PlaylistCover = styled.div`
  position: relative;
  &:hover {
    filter: brightness(95%);
  }
  &:hover ${ChangeCover} {
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
`;

export const PlaylistName = styled.div`
  margin-top: 5px;
  font-size: 20px;
`;

export const TrackListContainer = styled.div`
`;
