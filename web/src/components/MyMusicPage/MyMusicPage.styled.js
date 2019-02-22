import styled from 'styled-components';
import * as styles from 'constants/styles';
import { Plus } from 'styled-icons/feather';

export const Page = styled.div`
`;

export const Section = styled.div`
`;

export const SectionTitle = styled.div`
  font-size: 18px;
`;

export const Playlists = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const NewPlaylist = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${styles.backgroundGrayColor};
  color: ${styles.fontSecondaryColor};
`;

export const NewPlaylistImage = styled(Plus)`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;
