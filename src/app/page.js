import Banner from "./components/Banner";
import CardVideoSection from "./components/CardVideoSection";
import Footer from "./components/Footer";
import HomeNavbar from "./components/HomeNavbar";

export default function Home() {
  return (
    <main className="">
      <HomeNavbar />
      <Banner />
      <CardVideoSection />
      <Footer />
    </main>
  );
}
