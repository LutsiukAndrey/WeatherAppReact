import { CurrentWeather } from 'components/CurrentWeather/CurrentWeather';
import { LeftBottomWraper } from 'components/LeftBottomWraper/LeftBottomWraper';
import { Navigation } from 'components/Navigation/Navigation';
import { Quote } from 'components/Quote/Quote';
import styled from 'styled-components';

export const TodayPage = ({ data, onSelectBtn }) => {
  return (
    <>
      <Section>
        <WeatherSection>
          <WeatherContetn>
            <CurrentWeather data={data} />
          </WeatherContetn>
          <Navigation onSelectBtn={onSelectBtn} />
        </WeatherSection>
        <SectionBottom>
          <LeftBottomWraper />
          <Quote />
        </SectionBottom>
      </Section>
    </>
  );
};

const Section = styled.div`
  padding-bottom: 32px;
  margin: 0 auto;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
    max-width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 0px;
    padding-left: 0;
    padding-right: 0;
    min-width: 100%;
  }
`;
const SectionBottom = styled.div`
  color: #fff;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const WeatherContetn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 57px 32px;
  background-color: rgba(16, 33, 54, 0.8);

  border-radius: 34px;
  margin-bottom: 32px;
  color: #767d85;
  @media screen and (min-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border-radius: 32px 0 0 32px;
  }
`;
const WeatherSection = styled.div`
  margin-bottom: 32px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 680px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 411px;

    margin-bottom: 85px;

    margin-right: 0;
  }
`;
