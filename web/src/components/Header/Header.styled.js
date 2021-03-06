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

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchButtonContainer = styled.div`
  display: none;
`;

export const SearchButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  height: 35px;
  padding: 0 20px;
  border: none;
  border-radius: 10px;
  color: ${styles.whiteColor};
  background: linear-gradient(
    to bottom,
    #f1b9d2, #a67bc1 
  );
  font-size: 14px;
  text-decoration: none;
  
  :hover {
    cursor: pointer;
  }
`;

export const Search = styled.input`
  height: 35px;
  width: 414px;
  padding: 0 20px;
  
  border: none;
  border-radius: 10px;
  
  background-color: ${styles.backgroundGrayColor};
  color: ${styles.fontSecondaryColor};
  
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
  
  :focus {
    width: 450px;
  }
  
  :not([value=""]) + ${SearchButtonContainer} {
    display: block;
  }
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
