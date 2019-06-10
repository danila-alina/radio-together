import styled from 'styled-components';
import * as styles from 'constants/styles';
import { NavLink } from 'react-router-dom';

export const CardContainer = styled(NavLink)`
  text-decoration: none;
  margin-right: 30px;
`;

export const Card = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background: linear-gradient(${props => props.topColor}, ${props => props.bottomColor});
  padding: 5px;
  position: relative;
  z-index: 0;
  
  :hover {
    cursor: pointer;

    ::after {
     content: "";
     z-index: -1;
     position: absolute;
     bottom: -5px;
     left: 0;
     height: 105%;
     width: 100%;
     opacity: 0.8;
     border-radius: 10px;
     
     background: inherit;
     
     -webkit-filter: blur(8px);
     -moz-filter: blur(8px);
     -o-filter: blur(8px);
     -ms-filter: blur(8px);
     filter: blur(8px);
    }    
  }
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  :last-child {
    margin-right: 0;
  }
`;

export const Info = styled.div`
  padding: 5px;
`;

export const UserName = styled.div`
  font-weight: ${styles.fontMedium};
  font-size: 14px;
`;

export const RadiostationName = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;
