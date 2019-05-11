import styled from 'styled-components';
import * as styles from 'constants/styles';

export const StyledAccountInfo = styled.div`
  display: flex;
  padding: 30px 30px 0 30px;
`;

export const UserInfo = styled.div`
  margin: 20px 0 0 30px;
`;

export const UserName = styled.div`
  font-size: 20px;
`;

export const UserPreferences = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 16px;
`;

export const UserFollowers = styled.div`
  display: flex;
`;

export const UserFollowing = styled.div`
  margin-left: 30px;
  display: flex;
`;

export const TextBold = styled.span`
  font-weight: ${styles.fontMedium};
`;
