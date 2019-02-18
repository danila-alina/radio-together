import styled from 'styled-components';
import * as styles from 'constants/styles';

export const StyledHeader = styled.div`
  background-color: ${styles.backgroundColor};
  padding: 20px;
  
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.input`
  height: 35px;
  width: 325px;
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
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(#F1B9D2, #A67BC1);
`;
