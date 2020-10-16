import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesWrapper = styled.View`
  height: 240px;
`;

export const ImagesContainer = styled.ScrollView``;

ImagesContainer.defaultProps = {
  horizontal: true,
  pagingEnabled: true
}

export const Image = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: 240px;
  resizeMode: cover;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const DetailsTitle = styled.Text`
  color: #4D6F80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;

export const DetailsDescription = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #B3DAE2;
  margin-top: 40px;
  background-color: #E6F7FB;
`;

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background-color: #D3E2E6;
  margin: 40px 0;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

interface IScheduleItemProps {
  first?: boolean;
  second?: boolean;
  third?: boolean;
}

export const ScheduleItem = styled.View<IScheduleItemProps>`
  width: 48%;
  padding: 20px;
  border-width: 1px;
  border-radius: 20px;

  ${props => props.first === true ? (
    "background-color: #E6F7FB; border-color: #B3DAE2;"
  ) : null }

  ${props => props.second === true ? (
    "background-color: #EDFFF6; border-color: #A1E9C5;"
  ) : null }

  ${props => props.third === true ? (
    "background-color: #fef6f9; border-color: #ffbcd4;"
  ) : null }
`;

export const ScheduleText = styled.Text<IScheduleItemProps>`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  ${props => props.first === true ? (
    "color: #5C8599"
  ) : null }

  ${props => props.second === true ? (
    "color: #37C77F"
  ) : null }

  ${props => props.second === true ? (
  "color: #ff669d"
  ) : null }
`;

export const ClockIcon = styled(Feather)`
  color:#2AB5D1;
`;

ClockIcon.defaultProps = {
  size: 40,
  name: 'clock'
}

interface IInfoIconProps {
  red?: boolean;
}

export const InfoIcon = styled(Feather)<IInfoIconProps>`
  color: ${ props => props.red !== true ? '#39CC83;' : '#ff669d;'}
`;

InfoIcon.defaultProps = {
  size: 40,
  name: 'info'
}


export const ContactButton = styled(RectButton)`
  background-color: #3CDC8C;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const WhatsappIcon = styled(FontAwesome)`
  color: #fff;
`;

WhatsappIcon.defaultProps = {
  size: 24,
  name: 'whatsapp'
}


export const ContactButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  color: #FFF;
  font-size: 16px;
  margin-left: 16px;
`;