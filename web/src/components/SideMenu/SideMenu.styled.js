import styled from 'styled-components';
import * as styles from 'constants/styles';

export const StyledMenu = styled.div`
  width: 300px;
  height: 100%;

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

export const MenuItem = styled.div`
  padding: ${(props) => {
    return props.selected ? '15px 0px 15px 27px' : '15px 0px 15px 30px';
  }};
  background-color: ${props => props.selected && styles.backgroundSelectedColor};
  border-left: ${props => props.selected && `3px solid ${styles.selectedColor}`};
  font-weight: ${props => props.selected && styles.fontMedium};

  :hover {
    background-color: ${styles.backgroundSelectedColor};
    cursor: pointer;
  }
`;
