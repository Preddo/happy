import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 24px;
  background-color: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;
  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #8fa7b3;
  font-size: 16px;
`;

export const ArrowLeftIcon = styled(Feather)`
  color: #15b6d6;
`;

ArrowLeftIcon.defaultProps = {
  name: 'arrow-left',
  size: 24,
}

export const XIcon = styled(Feather)`
  color: #ff669d;
`;

XIcon.defaultProps = {
  name: 'x',
  size: 24,
}