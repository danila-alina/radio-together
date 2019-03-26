import styled from 'styled-components';
import * as styles from 'constants/styles';
import { NavLink } from 'react-router-dom';
import { Plus } from 'styled-icons/feather';

export const Page = styled.div`
  padding: 30px;
`;

export const Section = styled.div`
`;

export const SectionTitle = styled.div`
  font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
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
  
  :hover {
    cursor: pointer;
    color: #757575;
    box-shadow: 0 0 20px 3px #d9d9db;
  }
`;

export const NewPlaylistImage = styled(Plus)`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;
