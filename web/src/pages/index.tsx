import Link from 'next/link';

import { Container, ContentWrapper, Logo, Main, Location, Button, ArrowRightIcon } from '../styles/pages/Home'

import SEO from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Happy"
        description="Leve felicidade para o mundo"
      />

      <Container>
        <ContentWrapper>
          <Logo />

          <div>
            <Main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite instituições de acolhimento e mude o dia de muitas crianças.</p>
            </Main>

            <Location>
              <strong>Rio de Janeiro</strong>
              <span>Rio de Janeiro</span>
            </Location>

            <Link
              href="orphanages/map"
              passHref
            >
              <Button href="orphanagesmap" >
                <span>Explore o mapa</span>
                <ArrowRightIcon />
              </Button>
            </Link>
          </div>
        </ContentWrapper>
      </Container>
    </>
  )
}
