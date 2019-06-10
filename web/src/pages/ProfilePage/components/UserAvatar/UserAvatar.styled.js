import styled from 'styled-components';
import * as styles from 'constants/styles';

export const AvatarContainer = styled.div`
`;

export const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const GeneratedImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(${props => props.topColor}, ${props => props.bottomColor});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GeneratedText = styled.div`
  color: ${styles.whiteColor};
  opacity: 0.7;
  font-size: 74px;
  margin-bottom: 10px;
`;
