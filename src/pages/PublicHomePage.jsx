import Header from "../components/PublicHome/Home/Header";
import Hero from "../components/PublicHome/Home/Hero";
import Footer from "../components/PublicHome/Home/Footer";

const PublicHomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default PublicHomePage;
