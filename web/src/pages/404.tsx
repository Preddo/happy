import Link from 'next/link';

import notFound from '@/images/not-found.svg';

import { Container, Button } from '@/styles/pages/NotFound';

export default function NotFound() {
  return (
    <Container>
      <img src={notFound} alt="Não encontrado"/>
      <h1>Erro: 404</h1>
      <h1>Página não encontrada</h1>

      <Link href="/" passHref>
        <Button>
          Voltar para página inicial
        </Button>
      </Link>
    </Container>
  )
}
