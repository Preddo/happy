import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

import Marker from '@/images/map-marker.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const Aside = styled.div`
  width: 440px;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  > h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  > p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const MarkerImg = styled.img``;

MarkerImg.defaultProps = {
  src: Marker
}

export const MapContainer = styled.div`
  margin-bottom: 48px;
  border: 1px solid #d3e2e5;
  border-radius: 28px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  > strong {
    font-weight: 800;
  }
`;

export const Button = styled.a`
  position: absolute;
  z-index: 10;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background-color: #15c3d6;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #17d6eb
  }
`;

export const PlusIcon = styled(FiPlus)`
  color: white;
`;
