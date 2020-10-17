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

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${DoneBackground}) no-repeat 80% center;
`;

export const Main = styled.main`
  max-width: 392px;
  height: 100%;
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
`;

export const Button = styled.button`
  width: fit-content;
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
`;
