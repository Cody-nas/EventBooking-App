import Hero from "../Components/Hero";
import Choose from "../Components/Choose";
import Banner from "../Components/Banner";
import Upcoming from "../Components/Upcoming";
const Home = () => {
  return (
    <div>
      <Hero />      <Upcoming />
      <Choose />
      <Banner />
    </div>
  );
};

export default Home;
