import styled from 'styled-components';
import * as styles from 'constants/styles';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 30px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.input`
  height: 35px;
  width: 400px;
  padding: 0 20px;
  
  border: none;
  border-radius: 15px;
  
  background-color: ${styles.backgroundGrayColor};
  color: ${styles.fontSecondaryColor};
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  color: ${styles.fontColor};
  margin-right: 10px;
  
  :hover {
    cursor: pointer;
    color: ${styles.fontSelectedColor};
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(#F1B9D2, #A67BC1);
  
  :hover {
    cursor: pointer;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
