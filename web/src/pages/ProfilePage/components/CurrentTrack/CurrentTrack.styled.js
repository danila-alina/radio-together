import styled from 'styled-components';
import { ArrowShuffle } from 'styled-icons/typicons';
import { Pause } from 'styled-icons/fa-solid/Pause';
import { Play } from 'styled-icons/fa-solid/Play';
import * as styles from 'constants/styles';

export const CurrentTrackContainer = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const Cover = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const TrackInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;

export const TrackInfoName = styled.div`
`;

export const TrackName = styled.div`
  font-size: 18px;
  font-weight: ${styles.fontMedium};
`;

export const ArtistName = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

export const TrackInfoProgress = styled.div`
  display: flex;
  align-items: center;
`;

export const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackListenersContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

export const ListenerAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const ListenerName = styled.div`
  font-weight: ${styles.fontMedium};
`;

export const ListenersText = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const ListenersAmount = styled.div`
  font-weight: ${styles.fontMedium};
`;

export const PlayButton = styled(Play)`
  width: 20px;
  color: ${styles.grayColor};

  :hover {
    cursor: pointer;
  }
`;

export const PauseButton = styled(Pause)`
  width: 20px;
  color: ${styles.grayColor};

  :hover {
    cursor: pointer;
  }
`;

export const Time = styled.div`
  margin: 0 5px 0 10px;
  font-size: 14px;
  width: 40px;
`;

export const Progress = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: ${styles.grayColor};
  
  ::after {
    content: "";
    position: absolute;
    width: ${props => props.progress}%;
    height: 4px;
    border-radius: 2px;
    background-color: ${props => props.color};
  }
`;

export const ProgressContainer = styled.div`
  width: 400px;
  height: 4px;
  position: relative;
`;

export const ShuffleButton = styled(ArrowShuffle)`
  width: 30px;
  color: ${(props) => {
    return props.enabled ? props.color : styles.grayColor;
  }};
  
  :hover {
    cursor: pointer;
  }
`;
