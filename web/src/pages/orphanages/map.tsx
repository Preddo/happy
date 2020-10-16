import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import api from '@/services/api';

import { Container, Aside, Header, MarkerImg, Footer, Button, PlusIcon } from '@/styles/pages/orphanages/Map';

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
}

const Map = dynamic(
  () => import('../../components/Map'),
  { ssr: false }
)

export default function OrphanagesMap() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })

    setIsPageLoading(false);
  }, [])

  return (
    <Container>
      <Aside>
        <Header>
          <MarkerImg />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </Footer>
      </Aside>


        {!isPageLoading &&
          <Map
            center={[-27.2092052,-49.6401092]}
            zoom={16}
            style={{ width: '100%', height: '100%', zIndex: 5 }}
            orphanages={orphanages}
          />
        }

      <Link href="/orphanages/create" passHref>
        <Button href="#" >
          <PlusIcon />
        </Button>
      </Link>

    </Container>
  )
}
