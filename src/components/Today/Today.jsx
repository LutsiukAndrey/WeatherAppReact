import { CurrentWeather } from 'components/Today/CurrentWeather/CurrentWeather';
import { LeftBottomWraper } from 'components/Today/LeftBottomWraper/LeftBottomWraper';
import { Navigation } from 'components/Navigation/Navigation';
import { Quote } from 'components/Today/Quote/Quote';
import styled from 'styled-components';
import {
  Section,
  SectionBottom,
  WeatherContetn,
  WeatherSection,
} from './Today.module';

export const Today = ({ data, onSelectBtn }) => {
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
