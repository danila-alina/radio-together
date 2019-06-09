import styled from 'styled-components';
import * as styles from 'constants/styles';
import { Play, Pause } from 'styled-icons/feather';

export const PlayButton = styled(Play)`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${styles.whiteColor};
  opacity: 0.6;
  width: 40px;
`;

export const PauseButton = styled(Pause)`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${styles.whiteColor};
  opacity: 0.6;
  width: 40px;
`;
