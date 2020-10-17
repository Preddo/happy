import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    margin-bottom: 20px;
  }

  > h1 {
    font-weight: 600;
    color: #8FA7B2;
  }
`;

export const Button = styled.button`
  width: fit-content;
  height: 64px;
  border-radius: 20px;
  border: none;

  background: #8FA7B2;
  color: #fff;
  padding: 20px 40px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #3BD689;
  }
`;
