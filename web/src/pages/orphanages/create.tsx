import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { LeafletMouseEvent } from 'leaflet';
import { useEffect, useState, useCallback, FormEvent, ChangeEvent } from 'react';
import api from '@/services/api';

import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

import {
  Container,
  Main,
  Form,
  MapContainer,
  InputWrapper,
  ImageGallery,
  LabelAddImage,
  PlusIcon,
  SelectWrapper,
  SelectButton,
  ConfirmButton
} from '@/styles/pages/orphanages/Create';

const Map = dynamic(
  () => import('../../components/Map'),
  { ssr: false }
)

export default function CreateOrphanage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  const router = useRouter();

  const [position, setPosition] = useState(() => {
    const { latitude, longitude } = router.query;

    if ( latitude && longitude ) {
      return { latitude: Number(latitude), longitude: Number(longitude) };
    } else {
      return { latitude: 0, longitude: 0 };
    }
  });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    setPosition({
      latitude: event.latlng.lat,
      longitude: event.latlng.lng
    });
  }, [])

  const handleSelectedImages = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    })

    setPreviewImages(selectedImagesPreview);
  }, [])

  const handleSubmit = useCallback( (event: FormEvent) => {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('opening_hours', openingHours);
    data.append('open_on_weekends', String(openOnWeekends));

    images.map(image => {
      data.append('images', image);
    })

    console.log(data);

    api.post('orphanages', data).catch(err => {
      console.log(err);
    });

    router.push('/orphanages/creationcompleted');
  }, [])

  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  return (
    <Container>
      <SideBar />
      <Header
        title="Adicione uma instituição"
        showCancel
      />

      <Main>
        <Form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <InputWrapper>
              <label>Localização <span>Clique no mapa para registrar a localização</span></label>
              <MapContainer>
                {!isPageLoading &&
                  <Map
                    center={[position.latitude, position.longitude]}
                    style={{ width: '100%', height: 280 }}
                    zoom={15}
                    onClick={handleMapClick}
                    selectedPosition={position}
                  />
                }
              </MapContainer>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="images">Fotos</label>

              <ImageGallery >
                {previewImages && previewImages.map(image => (
                  <img key={image} src={image} alt={name}/>
                ))}

                <LabelAddImage htmlFor="image[]" className="new-image">
                  <PlusIcon/>
                </LabelAddImage>

                <input multiple onChange={handleSelectedImages} type='file' id="image[]"/>
              </ImageGallery>

            </InputWrapper>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputWrapper>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={openingHours}
                onChange={(e) => setOpeningHours(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <SelectWrapper>
                <SelectButton
                  type="button"
                  className={ openOnWeekends ? "active" : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </SelectButton>
                <SelectButton
                  type="button"
                  className={ !openOnWeekends ? "active" : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </SelectButton>
              </SelectWrapper>
            </InputWrapper>
          </fieldset>

          <ConfirmButton type="submit">
            Confirmar
          </ConfirmButton>
        </Form>
      </Main>
    </Container>
  );
}
