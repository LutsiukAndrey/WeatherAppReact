import { ContainerWraper } from './Container.module';

export const Container = ({ children }) => {
  return <ContainerWraper>{children}</ContainerWraper>;
};
