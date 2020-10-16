import React, { useCallback } from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, ArrowLeftIcon, XIcon } from './styles';

interface IHeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, showCancel = true }) => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleGoBackToHomepage = useCallback(() => {
    navigation.navigate('OrphanagesMap');
  }, []);

  return (
    <Container>
      <BorderlessButton
        onPress={handleGoBack}
      >
        <ArrowLeftIcon/>
      </BorderlessButton>
      
      <Title>{title}</Title>


      {showCancel ? (
        <BorderlessButton
          onPress={handleGoBackToHomepage}
        >
          <XIcon/>
        </BorderlessButton>
      ) : (
        <View/>
      )}
      
    </Container>
  );
};

export default Header;
