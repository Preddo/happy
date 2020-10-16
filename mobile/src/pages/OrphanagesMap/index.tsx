import React, { useState, useCallback } from 'react'
import { Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../service/api';

import mapMarker from '../../images/map-marker.png';

import {
  Container,
  CalloutWrapper,
  CalloutText,
  Footer,
  FooterText,
  AddOrphanageButton
} from './styles';

interface IOrphanage {
  name: string;
  latitude: number;
  longitude: number;
  id: number;
}

export default function OrphanagesMap() {
  const navigation = useNavigation();

  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  });

  const handleNavigationToOrphanageDetails = useCallback((id: number) => {
    navigation.navigate('OrphanageDatail', { id });
  }, []);

  const handleNavigationToCreateOrphanage = useCallback(() => {
    navigation.navigate('SelectMapPosition');
  }, []);

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height
        }}
        initialRegion={{
          latitude: -22.9449324,
          longitude: -43.3579796,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
      >
        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
          >
            <Callout
              tooltip
              onPress={() => handleNavigationToOrphanageDetails(orphanage.id)}
            >
              <CalloutWrapper>
                <CalloutText>             
                  {orphanage.name}
                </CalloutText>
              </CalloutWrapper>
            </Callout>
          </Marker>
        ))}
        
      </MapView>

      <Footer>
        <FooterText>
          {orphanages.length} orfanatos encontrados
        </FooterText>

        <AddOrphanageButton
          onPress={handleNavigationToCreateOrphanage}
        >
          <Feather name="plus" size={20} color="#fff" />
        </AddOrphanageButton>
      </Footer>
    </Container>
  )
}
