import { TodayPage } from 'pages/TodayPage';
import { FiveDaysPage } from 'pages/FiveDaysPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'components/Container/Container';
export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<TodayPage />} />
        <Route path="/" element={<FiveDaysPage />} />
      </Routes>
    </Container>
  );
};
