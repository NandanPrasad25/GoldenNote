import Header from "../components/PublicHome/Header";
import Hero from "../components/PublicHome/Hero";
import Footer from "../components/PublicHome/Footer";

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
