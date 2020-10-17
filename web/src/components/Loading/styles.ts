import styled, { keyframes } from 'styled-components';

import Marker from '@/images/map-marker.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%) ;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const jumpAnimation = keyframes`
  from {
    padding-bottom: 40px;
    animation-timing-function: ease-in;
  }
  50% {
    padding-bottom: 20px;
    animation-timing-function: ease-out;
  }
  to {
    padding-bottom: 40px;
    animation-timing-function: ease-in;
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
  width: fit-content;
  display: flex;
  align-items: flex-end;

  > img {
    animation: ${jumpAnimation} 1s infinite;
  }
`;

export const Image = styled.img``;

Image.defaultProps = {
  src: Marker,
  alt: 'Carregando'
}
