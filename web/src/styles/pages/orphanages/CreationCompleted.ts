import styled from 'styled-components';

import DoneBackground from '@/images/done-background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #37C77F;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  margin: 0 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: url(${DoneBackground}) no-repeat center 10%;
  background-size: auto 180px;

  @media (min-width: 1100px) {
    background: url(${DoneBackground}) no-repeat 80% center;
    background-size: auto auto;
    align-items: flex-start;
  }
`;

export const Main = styled.main`
  max-width: 392px;
  height: 100%;

  margin-top: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 88px;
    font-weight: 900;
    line-height: 80px;
  }

  > p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
  }

  @media (min-width: 1100px) {
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 64px;
  border-radius: 20px;
  border: none;

  background: #31B272;
  color: #fff;
  padding: 20px 40px;
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #3BD689;
  }

  @media (min-width: 1100px) {
    width: fit-content;
  }
`;
