import styled from 'styled-components';
// import { Play } from 'styled-icons/fa-solid';
import {
  SkipBack, SkipForward, Play, Pause,
} from 'styled-icons/feather';
import { ArrowShuffle } from 'styled-icons/typicons';
import * as styles from 'constants/styles';

export const TrackContainer = styled.div`
  position: fixed;
  width: 300px;
  bottom: 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
`;

export const TrackInfoContainer = styled.div`
  display: flex;
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  overflow: hidden;
  flex: 1 0 0;
`;

export const Cover = styled.div`
  background-size: 100% auto;
  background-image: url(${props => props.cover});
  width: 80px;
  height: 80px;
  border-radius: 10px;
  position: relative;
`;

export const TrackName = styled.div`
  font-size: 16px;
  font-weight: ${styles.fontMedium};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ArtistName = styled.div`
  font-size: 16px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProgressInfo = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const TimeLeft = styled.div`
  font-size: 12px;
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TimeRight = styled.div`
  font-size: 12px;
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
  width: 100%;
  height: 4px;
  position: relative;
`;

export const TrackSettings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const PlayButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PreviousTrack = styled(SkipBack)`
  width: 20px;
  fill: ${styles.iconLightColor};
  color: ${styles.iconColor};
  
  :hover {
    cursor: pointer;
    fill: ${styles.iconColor};
  }
`;

export const NextTrack = styled(SkipForward)`
  width: 20px;
  fill: ${styles.iconLightColor};
  color: ${styles.iconColor};
  
  :hover {
    cursor: pointer;
    fill: ${styles.iconColor};
  }
`;

export const PlayTrack = styled(Play)`
  width: 30px;
  fill: ${styles.iconLightColor};
  color: ${styles.iconColor};
  margin: 0 15px;
  
  :hover {
    cursor: pointer;
    fill: ${styles.iconColor};
  }
`;

export const PauseTrack = styled(Pause)`
  width: 30px;
  fill: ${styles.iconLightColor};
  color: ${styles.iconColor};
  margin: 0 15px;
  
  :hover {
    cursor: pointer;
    fill: ${styles.iconColor};
  }
`;

export const RepeatTrack = styled(ArrowShuffle)`
  width: 20px;
  // fill: transparent;
  color: ${styles.iconHoverColor};
  
  :hover {
    cursor: pointer;
    color: ${styles.iconHoverColor};
  }
`;

export const StopTrack = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${styles.iconColor};
  
  :hover {
    cursor: pointer;
    background-color: ${styles.iconHoverColor};
  }
`;
