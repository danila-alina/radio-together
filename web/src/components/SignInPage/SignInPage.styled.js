import styled from 'styled-components';
import * as styles from 'constants/styles';

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${styles.fontColor};
  background: linear-gradient(
    to bottom left,
    #F7BB97, #DD5E89 
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  max-width: 750px;
  min-height: 300px;
  margin: 0 auto;
  padding: 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  letter-spacing: -2px;
`;

export const SignInButton = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-weight: normal;
  font-size: 16px;
  margin-top: 30px;
  :hover {
    cursor: pointer;
  }
`;
