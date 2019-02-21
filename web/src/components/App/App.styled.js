import styled from 'styled-components';
import * as styles from 'constants/styles';

export const Layout = styled.div`
  display: flex;
`;

export const Main = styled.div`
  width: 100%;
  background-color: ${styles.backgroundColor};
`;

export const Page = styled.div`
  color: ${styles.fontColor};
  padding: 20px 30px;
`;
