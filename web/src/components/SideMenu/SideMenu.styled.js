import styled from 'styled-components';
import * as styles from 'constants/styles';
import { NavLink } from 'react-router-dom';

export const StyledMenu = styled.div`
  width: 300px;

  background-color: ${styles.backgroundGrayColor};
`;

export const Title = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  color: ${styles.fontColor};
  font-weight: ${styles.fontExtraLight};
  font-size: 24px;
  padding-left: 30px;
`;

export const MenuList = styled.div`
`;

export const MenuItem = styled(NavLink)`
  padding: 15px 0px 15px 30px;
  text-decoration: none;

  :hover {
    background-color: ${styles.backgroundSelectedColor};
    cursor: pointer;
  }
  
  &.${'selectedItem'} {
    background-color: ${styles.backgroundSelectedColor};
    border-left: 3px solid ${styles.selectedColor};
    font-weight: ${styles.fontMedium};
    padding: 15px 0px 15px 27px;
  }
`;
