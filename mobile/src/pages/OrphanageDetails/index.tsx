import React, { useState, useEffect, useCallback } from 'react';
import { Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import api from '../../service/api';

import mapMarkerImg from '../../images/map-marker.png';

import {
  Container,
  ImagesWrapper,
  ImagesContainer,
  Image,
  DetailsContainer,
  DetailsTitle,
  DetailsDescription,
  MapContainer,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ClockIcon,
  InfoIcon,
  ScheduleText,
  ContactButton,
  WhatsappIcon,
  ContactButtonText,
} from './styles';

interface IRouteParams {
  id: number;
}

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

export default function OrphanageDetails() {
  const route = useRoute();
  const params = route.params as IRouteParams;

  const [orphanage, setOrphanage] = useState<IOrphanage>();

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    })
  }, [params.id]);

  const handleOpenGoogleMapsRoutes = useCallback(() => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`)
  }, [])

  if (!orphanage) {
    return null;
  }

  return (
    <Container>
      <ImagesWrapper>
        <ImagesContainer>
          { orphanage.images.map(image => (
            <Image
              key={image.id}
              source={{ uri: image.url }}
            />
          ))}
        </ImagesContainer>
      </ImagesWrapper>

      <DetailsContainer>
        <DetailsTitle>{orphanage.name}</DetailsTitle>
        <DetailsDescription>{orphanage.about}</DetailsDescription>
      
        <MapContainer>
          <MapView 
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{
              width: '100%',
              height: 150,
            }}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </MapView>

          <RoutesContainer
            onPress={handleOpenGoogleMapsRoutes}
          >
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>
      
        <Separator/>

        <DetailsTitle>Instruções para visita</DetailsTitle>
        <DetailsDescription>{orphanage.instructions}</DetailsDescription>

        <ScheduleContainer>
          <ScheduleItem first={true}>
            <ClockIcon/>
            <ScheduleText first={true}>Segunda à Sexta {orphanage.opening_hours}</ScheduleText>
          </ScheduleItem>

          {orphanage.open_on_weekends ? (
            <ScheduleItem second={true}>
              <InfoIcon />
              <ScheduleText second={true} >Atendemos fim de semana</ScheduleText>
            </ScheduleItem>
          ) : (
            <ScheduleItem third={true}>
              <InfoIcon red={true} />
              <ScheduleText third={true} >Não Atendemos fim de semana</ScheduleText>
            </ScheduleItem>
          )}
          
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <WhatsappIcon />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  )
}