import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { Container, BorderlessButton, Title, ArrowLeftIcon, XIcon } from './styles';

interface IHeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, showCancel }) => {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.back();
  }, []);

  const handleGoBackToHomepage = useCallback(() => {
    router.push('/orphanages/map');
  }, []);

  return (
    <Container>
      <BorderlessButton
        onClick={handleGoBack}
      >
        <ArrowLeftIcon/>
      </BorderlessButton>

      <Title>{title}</Title>


      {showCancel ? (
        <BorderlessButton
          onClick={handleGoBackToHomepage}
        >
          <XIcon/>
        </BorderlessButton>
      ) : (
        <div/>
      )}

    </Container>
  );
};

export default Header;
