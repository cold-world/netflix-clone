import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
