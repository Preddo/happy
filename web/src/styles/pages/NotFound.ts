import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 32px;
    font-weight: 800;
    color: #8FA7B2;
  }

  > h2 {
    font-weight: 600;
    font-size: 24px;
    color: #8FA7B2;
    padding: 0 26px;
    text-align: center;
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

export const Button = styled.button`
  width: fit-content;
  height: 64px;
  border-radius: 20px;
  border: none;

  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);;
  color: #fff;
  padding: 20px 40px;
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
