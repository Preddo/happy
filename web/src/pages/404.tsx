import Link from 'next/link';

import notFound from '@/images/not-found.svg';

import { Container, ContentWrapper, ImageWrapper, Button } from '@/styles/pages/NotFound';

export default function NotFound() {
  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
        <img src={notFound} alt="Não encontrado"/>
        </ImageWrapper>
        <h1>Erro 404</h1>
        <h2>Não conseguimos encontrar a página que você está procurando</h2>

        <Link href="/" passHref>
          <Button>
            Voltar para página inicial
          </Button>
        </Link>
      </ContentWrapper>
    </Container>
  )
}
