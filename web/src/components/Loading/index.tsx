import SEO from '../SEO';

import { Container, ImageWrapper, Image } from './styles';

const Loading: React.FC = () => {
  return (
    <>
      <SEO
        title="Carregando..."
        shouldExcludeTitleSuffix
        shouldIndexPage={false}
      />
      <Container>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
      </Container>
    </>
  );
};

export default Loading;
