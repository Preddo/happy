import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

import LogoSVG from "@/images/logo.svg"
import Landing from '@/images/landing.svg'
import LandingMobile from '@/images/landing-mobile.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%) ;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 390px;

  height: 100%;
  max-height: 580px;
  padding: 0 22px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;


  background: url(${LandingMobile}) no-repeat 100% 100%;
  background-size: auto 40%;

  @media (min-width: 1100px) {
    max-width: 1100px;
    background: url(${Landing}) no-repeat 80% center;
    background-size: auto 100%;
  }
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
    font-size: 56px;
    font-weight: 900;
    line-height: 58px;
  }

  > p {
    display: none;
  }


  @media (min-width: 1100px) {
    > h1 {
      font-size: 80px;
      line-height: 76px;
    }

    > p {
      display: block;
      margin-top: 24px;
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

export const Location = styled.div`
  font-size: 20px;
  line-height: 24px;

  margin-top: 10px;

  display: flex;
  flex-direction: column;

  text-align: left;

  > strong {
    font-weight: 800;
  }



  @media (min-width: 1100px) {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px ;

    text-align: right;
  }
`;

export const Button = styled.a`
  width: 100%;
  height: 80px;
  border-radius: 20px;
  background: #ffd666;

  margin-top: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
  }

  text-decoration: none;

  > span {
    color: rgba(0,0,0,0.6);
    font-weight: 700;
    font-size: 20px;
    margin-right: 12px;
  }

  @media (min-width: 1100px) {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    margin-top: 0;

    border-radius: 30px;

    > span {
      display: none;
    }
  }
`;

export const ArrowRightIcon = styled(FiArrowRight)`
  width: 26px;
  height: 26px;
  color: rgba(0,0,0,0.6);
`;
