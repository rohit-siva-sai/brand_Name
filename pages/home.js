import React from "react";
import MobileApp from "@/components/homepage/mobileApp";
import Suppliers from "@/components/homepage/suppliers";
import BestQuotes from "@/components/homepage/bestQuotes";
import Buying from "@/components/homepage/buying";
import Explore from "@/components/home/explore";
import Taxcredit from "@/components/home/taxcredit";
import Supplies from "@/components/home/supplies";
import Brands from "@/components/home/brands";
import Benifits from "@/components/home/benifits";
import LearnMore from "@/components/home/learnMore";
import Features from "@/components/home/features";
import Business from "@/components/home/business";
import Updates from "@/components/home/updates";
import Faq from "@/components/home/faq";
import Main from "@/components/home/main";

const Home = () => {
  return (
    <div className="overflow-hidden md:overflow-auto">
     
      <Main/>
        <Taxcredit/>
        <Supplies/>
        <Brands/>
        <Benifits/>
        <LearnMore/>
        <div className="flex flex-col space-y-16 py-12 bg-gray-100">
        <Features/>
        <Business/>
        <Updates/>
        </div>
        <Faq/>
        <Explore/>
    </div>
  );
};

export default Home;
