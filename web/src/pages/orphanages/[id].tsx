import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState, useCallback } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import api from '@/services/api';

import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

import {
  Container,
  Main,
  OrphanageDatails,
  ImageGalley,
  SelectImageButton,
  OrphanageDatailsContent,
  MapContainer,
  OpenDatails,
  ContactButton
} from '@/styles/pages/orphanages'

interface IImage {
  id: number;
  url: string;
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
  images: Array<IImage>;
}

const Map = dynamic(
  () => import('../../components/Map'),
  { ssr: false }
)

export default function Orphanage(orphanage: IOrphanage ) {
  const routes = useRouter();
  const [isPageLoading, setIsPageLoading] = useState(true);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  const handleSelectedImage = useCallback((selectedImageIndex) => {
    setActiveImageIndex(selectedImageIndex);
  }, [])

  if (!orphanage || routes.isFallback) {
    return <Loading/>
  }

  return (
    <>
      <SEO
        title={`${orphanage.name} | Explore as instituições de acolhimento`}
        description={`Visite ${orphanage.name} e ajude a levar alegria para as crianças`}
        image={orphanage.images[0].url}
        shouldExcludeTitleSuffix
      />

      <Container >
        <SideBar/>
        <Header
          title="Instituição de acolhimento"
        />

        <Main>
          <OrphanageDatails>
            <img src={orphanage.images[activeImageIndex].url} alt="Lar das meninas" />

            <ImageGalley>
              { orphanage.images.map((image, index) => (
                <SelectImageButton
                  onClick={() => handleSelectedImage(index)}
                  key={image.id}
                  className={ activeImageIndex === index ? "active" : ''}
                  type="button"
                >
                  <img src={image.url} alt={orphanage.name}/>
                </SelectImageButton>
              ))}
            </ImageGalley>


            <OrphanageDatailsContent>
              <h1>{orphanage.name}</h1>
              <p>{orphanage.about}</p>

              <MapContainer>
                {!isPageLoading &&
                  <Map
                    interactive={false}
                    orphanages={[orphanage]}
                    center={[orphanage.latitude, orphanage.longitude]}
                    zoom={16}
                    style={{ width: '100%', height: 280 }}
                    dragging={false}
                    touchZoom={false}
                    zoomControl={false}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                  />
                }

                <footer>
                  <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
                </footer>
              </MapContainer>

              <hr />

              <h2>Instruções para visita</h2>
              <p>{orphanage.instructions}</p>

              <OpenDatails>
                <div className="hour">
                  <FiClock size={32} color="#15B6D6" />
                  Segunda à Sexta <br />
                  {orphanage.opening_hours}
                </div>

                {orphanage.open_on_weekends ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos <br />
                    fim de semana
                  </div>
                ) : (
                  <div className="open-on-weekends dont-open">
                    <FiInfo size={32} color="#ff669d" />
                    Não atendemos <br />
                    fim de semana
                  </div>
                ) }


              </OpenDatails>

              <ContactButton type="button">
                <FaWhatsapp size={20} color="#FFF" />
                Entrar em contato
              </ContactButton>
            </OrphanageDatailsContent>
          </OrphanageDatails>
        </Main>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('orphanages');
  const orphanages = response.data;

  const paths = orphanages.map((orphanage: IOrphanage) => {
    return {
      params: {
        id: String(orphanage.id),
      }
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<IOrphanage> = async (context) => {
  const { id } = context.params;

  const response = await api.get(`orphanages/${id}`);

  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
    images
  } = response.data;

  return {
    props: {
      id: Number(id),
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    },
    revalidate: 60,
  }
}


