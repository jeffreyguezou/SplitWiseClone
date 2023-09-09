import CoreAndPro from "./CoreAndPro";
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
    </div>
  );
};
export default LandingPage;
