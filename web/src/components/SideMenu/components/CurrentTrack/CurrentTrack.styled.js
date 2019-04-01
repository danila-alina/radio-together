import styled from 'styled-components';
import * as styles from 'constants/styles';

export const TrackContainer = styled.div`
  position: fixed;
  width: 300px;
  bottom: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

export const Cover = styled.div`
  background-size: 100% auto;
  background-image: url(${props => props.cover});
  width: 80px;
  height: 80px;
  border-radius: 10px;
  
  :hover {
    cursor: pointer;
  }
`;

export const TrackName = styled.div`
  font-size: 16px;
  font-weight: ${styles.fontMedium};
`;

export const ArtistName = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

export const ProgressInfo = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  margin: 0 5px 0 10px;
  font-size: 12px;
  width: 25px;
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
  width: 200px;
  height: 4px;
  position: relative;
`;
