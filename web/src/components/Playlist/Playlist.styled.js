import styled from 'styled-components';
import * as styles from 'constants/styles';
import { CompactDisc } from 'styled-icons/fa-solid';

export const PlaylistContiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 30px;
`;

export const Cover = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  object-fit: cover;
  
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
`;

export const GeneratedCover = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background: linear-gradient(${props => props.topColor}, ${props => props.bottomColor});
  display: flex;
  justify-content: center;
  align-items: center;
  
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
`;

export const PlaylistImage = styled(CompactDisc)`
  width: 60px;
  height: 60px;
  color: ${styles.whiteColor};
  opacity: 0.7;
`;

export const PlaylistName = styled.div`
  margin-top: 10px;
`;
