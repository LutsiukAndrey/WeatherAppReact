import { Header } from 'components/header/Header';
import { ContainerWraper } from './Container.module';

export const Container = ({ children }) => {
  return (
    <ContainerWraper>
      <Header />
      {children}
    </ContainerWraper>
  );
};
