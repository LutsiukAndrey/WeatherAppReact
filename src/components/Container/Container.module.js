import styled from 'styled-components';

export const ContainerWraper = styled.div`
  margin: 0 auto;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    /* padding-left: 16px;
    padding-right: 16px; */
    max-width: 1280px;
  }
`;
