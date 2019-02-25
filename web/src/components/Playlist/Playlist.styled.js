import styled from 'styled-components';
import * as styles from 'constants/styles';
import { CompactDisc } from 'styled-icons/fa-solid';

export const PlaylistName = styled.div`
  margin-top: 10px;
`;

export const CoverContainer = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  position: relative;
`;

export const CoverShadow = styled.div`
  position:absolute;
  background-size: 100% auto;
  background-image: url(${props => props.cover});
`;

export const Cover = styled.div`
  background-size: 100% auto;
  background-image: url(${props => props.cover});
  border-radius: 10px;
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height:100%;
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
`;

export const PlaylistImage = styled(CompactDisc)`
  width: 60px;
  height: 60px;
  color: ${styles.whiteColor};
  opacity: 0.7;
`;

export const PlaylistContiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 30px;
  
  :hover {
    cursor: pointer;
  }
  
  &:hover ${PlaylistName} {
    color: ${styles.fontSelectedColor};
  }
  
  &:hover ${CoverShadow} {
    bottom: -5px;
    left: 0;
    height: 105%;
    width: 100%;
    opacity: 0.8;
    border-radius: 10px;
      
    -webkit-filter: blur(8px);
    -moz-filter: blur(8px);
    -o-filter: blur(8px);
    -ms-filter: blur(8px);
    filter: blur(8px);
  }
  
  &:hover ${GeneratedCover} {
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
