import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container } from './SharedLayout.styled';
import { LinkButton } from '../LinkButton/LinkButton';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkButton to={'/'} end={'end'}>
            Home
          </LinkButton>
          <LinkButton to={'/movies'}>Movies</LinkButton>
        </nav>
      </Header>
      <Suspense fallback={<Loader isLoading={true} />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
