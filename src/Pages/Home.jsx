import Hero from "../Components/Hero";
import Top from "../Components/Top";
import Banner from "../Components/Banner";
import Upcoming from "../Components/Upcoming";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Upcoming />
      <Top />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
