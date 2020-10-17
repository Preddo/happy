import styled from 'styled-components';
import { FiArrowLeft, FiX } from "react-icons/fi";

export const Container = styled.header`
  width: 100%;
  padding: 22px;

  background-color: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const BorderlessButton = styled.button`
  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 16px;
  color: #8fa7b3;
  margin: 0 8px;
`;

export const ArrowLeftIcon = styled(FiArrowLeft)`
  color: #15b6d6;
`;

ArrowLeftIcon.defaultProps = {
  size: 24,
}

export const XIcon = styled(FiX)`
  color: #ff669d;
`;

XIcon.defaultProps = {
  size: 24,
}
