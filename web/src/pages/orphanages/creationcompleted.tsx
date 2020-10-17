import Link from 'next/link';

import SEO from '@/components/SEO';

import { Container, ContentWrapper, Main, Button } from '@/styles/pages/orphanages/CreationCompleted';

export default function CreationCompleted() {
  return (
    <>
      <SEO
        title="Cadastro concluído"
        shouldExcludeTitleSuffix
        shouldIndexPage={false}
      />
      <Container>
        <ContentWrapper>
          <Main>
            <h1>Ebaaa!</h1>
            <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
            <Link href="/orphanages/map" passHref>
              <Button>
                Voltar para o mapa
              </Button>
            </Link>
          </Main>
        </ContentWrapper>
      </Container>
    </>
  )
}
