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
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvshows" element={<TVShows />} />
              <Route path="/personal" element={<Personal />} />
            </Routes>
          </MainLayout>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
