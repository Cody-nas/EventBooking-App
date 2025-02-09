import Hero from "../Components/Hero";
import Top from "../Components/Top";
import Banner from "../Components/Banner";
import Upcoming from "../Components/Upcoming";
import Navbar from "../Components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Upcoming />
      <Top />
      <Banner />
    </div>
  );
};

export default Home;
