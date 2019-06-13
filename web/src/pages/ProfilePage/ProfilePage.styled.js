import styled from 'styled-components';
import * as styles from 'constants/styles';
import { PlusCircle, MinusCircle } from 'styled-icons/feather';

export const StyledPage = styled.div`
`;

export const AccountInfoSection = styled.div`
  display: flex;
  padding: 30px 30px 0 30px;
`;

export const PlaylistInfoContainer = styled.div`
  padding: 0 30px;
  display: flex;
`;

export const PlaylistInfo = styled.div``;

export const Playlist = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${styles.fontLight};
`;

export const PlaylistName = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

export const RadiostationSection = styled.div`
  margin-top: 30px;
`;

export const Title = styled.div`
  font-size: 20px;
  padding: 0 30px;
  margin-top: 30px;
`;

export const TracksList = styled.div`
  margin-top: 20px;
`;

export const JoinRadiostationButton = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const JoinRadiostationText = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-left: 5px;
`;

export const JoinRadiostationIcon = styled(PlusCircle)`
  width: 23px;
  fill: transparent;
  color: ${styles.iconColor};
`;

export const PlaylistInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;

export const LeaveRadiostationButton = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const LeaveRadiostationText = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-left: 5px;
`;

export const LeaveRadiostationIcon = styled(MinusCircle)`
  width: 23px;
  fill: transparent;
  color: ${styles.iconColor};
`;

export const LeavelistInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;
