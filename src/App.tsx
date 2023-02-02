import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Personal from './pages/Personal';
import TVShows from './pages/TVShows';
import './scss/main.scss';

const client = new QueryClient();

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <div className="app">
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home type='movie' />} />
              <Route path="/movies" element={<Movies type='movie' />} />
              <Route path="/tvshows" element={<TVShows type='tv' />} />
              <Route path="/personal" element={<Personal />} />
            </Routes>
          </MainLayout>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
