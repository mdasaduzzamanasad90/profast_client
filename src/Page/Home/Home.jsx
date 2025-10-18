import Banner from "../../Component/Banner/Banner";
import HowItWorks from "../../Component/HowItWorks/HowItWorks";
import SalesTeams from "../../Component/SalesTeams/SalesTeams";
import CustomerSatisfaction from "../../Component/CustomerSatisfaction/CustomerSatisfaction";
import CustomarSaying from "../../Component/CustomarSaying/CustomarSaying";
import Faq from "../../Component/FAQ/Faq";
import OurServices from "../../Component/OurServices/OurServices";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <SalesTeams></SalesTeams>
      <CustomerSatisfaction></CustomerSatisfaction>
      <CustomarSaying></CustomarSaying>
      <Faq></Faq>
    </div>
  );
};

export default Home;
