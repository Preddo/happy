import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

import LogoSVG from "@/images/logo.svg"
import Landing from '@/images/landing.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${Landing}) no-repeat 80% center;
`

export const Logo = styled.img`
  width: 240px;
  height: 74px;
`

Logo.defaultProps = {
  src: LogoSVG
}

export const Main = styled.main`
  max-width: 350px;

  > h1 {
    font-size: 88px;
    font-weight: 900;
    line-height: 80px;
  }

  > p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  > strong {
    font-weight: 800;
  }
`;

export const Button = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;


  width: 80px;
  height: 80px;
  border-radius: 30px;
  background: #ffd666;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
  }
`;

export const ArrowRightIcon = styled(FiArrowRight)`
  width: 26px;
  height: 26px;
  color: rgba(0,0,0,0.6);
`;