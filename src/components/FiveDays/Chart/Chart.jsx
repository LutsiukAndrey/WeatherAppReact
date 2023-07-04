import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartContainer, HideChartBtn } from './Chart.module';
import { useState } from 'react';

export const Chart = ({ openChart, setOpenChart, data }) => {
  const [filtersChart, setFiltersChart] = useState({
    dayTempreture: false,
    humidity: false,
    wind: false,
    pressure: false,
  });
  const { dayTempreture, humidity, wind, pressure } = filtersChart;

  return (
    <ChartContainer>
      <HideChartBtn
        onClick={() => {
          setOpenChart(!openChart);
        }}
      >
        Hide chart
      </HideChartBtn>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data.weatherFiveDays}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <Legend
            // align="left"
            iconSize={12}
            verticalAlign="top"
            height={100}
            iconType="square"
            onClick={e => {
              const { dataKey } = e;
              setFiltersChart(prev => ({ ...prev, [dataKey]: !prev[dataKey] }));
            }}
          />
          <XAxis dataKey="dayName" />
          <YAxis />
          <Tooltip />

          <Line
            hide={dayTempreture || false}
            type="monotone"
            id="1"
            dataKey="dayTempreture"
            stroke="#FF6B09"
          />
          <Line
            hide={humidity || false}
            type="monotone"
            dataKey="humidity"
            stroke="#0906EB"
          />
          <Line
            hide={wind || false}
            type="monotone"
            dataKey="wind"
            stroke="#EA9A05"
          />
          <Line
            hide={pressure || false}
            type="monotone"
            dataKey="pressure"
            stroke="#067806"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
