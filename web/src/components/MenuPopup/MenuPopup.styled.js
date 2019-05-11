import styled from 'styled-components';
import * as styles from 'constants/styles';

export const Menu = styled.div`
  position: absolute;
  background-color: ${styles.backgroundColor};
  border: 1px solid ${styles.grayColor};
  border-radius: 10px;
  width: 200px;
  font-size: 14px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  z-index: 2;
`;

export const Option = styled.div`
  padding: 10px;

  :hover {
    cursor: pointer;
    background-color: ${styles.backgroundLightGrayColor};
    :first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    :last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;
