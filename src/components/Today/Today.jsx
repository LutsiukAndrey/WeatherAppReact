import { CurrentWeather } from 'components/Today/CurrentWeather/CurrentWeather';
import { LeftBottomWraper } from 'components/Today/LeftBottomWraper/LeftBottomWraper';
import { Navigation } from 'components/Navigation/Navigation';
import { Quote } from 'components/Today/Quote/Quote';
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
            {!data ? (
              <h3 style={{ color: '#fff' }}>City is not found</h3>
            ) : (
              <CurrentWeather data={data} />
            )}
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
