import React from 'react';
import { Nav } from '../components/Nav';
import { Body } from '../components/Body';
import { Footer } from '../components/Footer'
import { Specials } from '../components/Specials';

export const Home = () => {
  return (
      <>
    <Nav />
    <Body />
    <Specials />
    <Footer />
    </>
  );
}

