import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { LeafletMouseEvent } from 'leaflet';
import { useEffect, useState, useCallback, FormEvent, ChangeEvent } from 'react';
import api from '@/services/api';

import SideBar from '@/components/SideBar';

import { Container, Main, Form, MapContainer, InputWrapper, ImageGallery, LabelAddImage, PlusIcon, SelectWrapper, SelectButton, ConfirmButton } from '@/styles/pages/orphanages/Create';

const Map = dynamic(
  () => import('../../components/Map'),
  { ssr: false }
)

export default function CreateOrphanage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  const router = useRouter();

  const [name, setName] = useState('');
  const [position, setPosition] = useState({ latitude: 0, longitude: 0});
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

  const handleSubmit = useCallback( async (event: FormEvent) => {
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

    await api.post('orphanages/', data);

    router.back();
  }, [])

  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  return (
    <Container>
      <SideBar />

      <Main>
        <Form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <MapContainer>
              {!isPageLoading &&
                <Map
                  center={[-27.2092052,-49.6401092]}
                  style={{ width: '100%', height: 280 }}
                  zoom={15}
                  onClick={handleMapClick}
                  selectedPosition={position}
                />
              }
            </MapContainer>

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

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
