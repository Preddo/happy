import styled from 'styled-components';
import { FiArrowLeft } from "react-icons/fi";

import mapMarkerImg from '@/images/map-marker.svg';

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  display: none;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 48px;
`;

Logo.defaultProps = {
  src: mapMarkerImg,
  alt: "Happy"
}

export const Footer = styled.footer`
  a,
  button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12AFCB;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover,
  button:hover {
    background: #17D6EB;
  }
`;

export const ArrowLeftIcon = styled(FiArrowLeft)`
  width: 24px;
  height: 24px;
  color: #fff;
`;


