import { DateNow } from 'components/Today/LeftBottomWraper/DateNow/DateNow';
import { SunTime } from 'components/Today/LeftBottomWraper/SunTime/SunTime';
import { Wraper } from './LeftBottomWraper.module';
export const LeftBottomWraper = () => {
  return (
    <Wraper>
      <DateNow />
      <SunTime />
    </Wraper>
  );
};
