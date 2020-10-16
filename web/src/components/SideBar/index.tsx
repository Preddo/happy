import Link from 'next/link';

import { Container, Logo, Footer, ArrowLeftIcon } from './styles';

export default function SideBar() {
  return (
    <Container>
      <Logo/>

        <Footer>
          <Link href="/orphanages/map">
            <button type="button" onClick={() => {}}>
                <ArrowLeftIcon/>
            </button>
          </Link>
        </Footer>
    </Container>
  );
}
