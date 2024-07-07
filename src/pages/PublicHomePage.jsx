import Header from "../components/PublicHome/Home/Header";
import Hero from "../components/PublicHome/Home/Hero";
import Footer from "../components/PublicHome/Home/Footer";

const PublicHomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-col">
        <Header />
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default PublicHomePage;
