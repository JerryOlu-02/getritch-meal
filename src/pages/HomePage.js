import Hero from '../components/Hero/Hero';
import AboutUs from '../components/HomePageContent/AboutUs/AboutUs';
import ChefsWord from '../components/HomePageContent/ChefsWord/ChefsWord';
import Laurels from '../components/HomePageContent/Laurels/Laurels';
import TodaysSpecial from '../components/HomePageContent/TodaysSpecial/TodaysSpecial';
import Video from '../components/HomePageContent/Video/Video';
import Gallery from '../components/HomePageContent/Gallery/Gallery';
import FindUs from '../components/HomePageContent/FindUs/FindUs';

const HomePage = function () {
  return (
    <>
      <Hero />
      <AboutUs />
      <TodaysSpecial />
      <ChefsWord />
      <Video />
      <Laurels />
      <Gallery />
      <FindUs />
    </>
  );
};

export default HomePage;
