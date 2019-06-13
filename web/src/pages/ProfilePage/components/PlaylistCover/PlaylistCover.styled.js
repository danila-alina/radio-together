import styled from 'styled-components';

export const PlaylistCover = styled.div`
`;

export const Cover = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.cover});
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const GeneratedCover = styled.div`
  background: linear-gradient(${props => props.topColor}, ${props => props.bottomColor});
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
