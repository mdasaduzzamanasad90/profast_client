import { useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banner";
import HowItWorks from "../../Component/HowItWorks/HowItWorks";
import Services from "../../Component/Services/Services";
import SalesTeams from "../../Component/SalesTeams/SalesTeams";
import CustomerSatisfaction from "../../Component/CustomerSatisfaction/CustomerSatisfaction";
import CustomarSaying from "../../Component/CustomarSaying/CustomarSaying";
import Faq from "../../Component/FAQ/Faq";


const Home = () => {
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
        <div>
          <div className={`${scrolled ? "md:mt-36 mt-10" : ""}`}>
             <Banner></Banner>
          </div>
           <HowItWorks></HowItWorks>
           <Services></Services>
           <SalesTeams></SalesTeams>
           <CustomerSatisfaction></CustomerSatisfaction>
           <CustomarSaying></CustomarSaying>
           <Faq></Faq>
        </div>
    );
};

export default Home;