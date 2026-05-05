import {FC, memo} from 'react';
import type {MetaFunction} from 'react-router';

import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import HomepageHeader from '../components/Sections/HomepageHeader';
import Resume from '../components/Sections/Resume';
import {homePageMeta, navLinks} from '../data/data';

export const meta: MetaFunction = () => {
  const {title, description} = homePageMeta;
  return [
    {title},
    {name: 'description', content: description},
    {property: 'og:title', content: title},
    {property: 'og:description', content: description},
  ];
};

const Home: FC = memo(() => {
  return (
    <>
      <HomepageHeader sections={navLinks} />
      <Hero />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
});

export default Home;
