import CoreAndPro from "./CoreAndPro";
import Footer from "./Footer/Footer";
import GetProSection from "./GetProSection";
import Header from "./Header";
import MainSection from "./MainSection";
import ReviewSection from "./Reviews/ReviewSection";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <GetProSection />
      <CoreAndPro />
      <ReviewSection />
      <Footer />
    </div>
  );
};
export default LandingPage;
