import React from "react";
import MobileApp from "@/components/homepage/mobileApp";
import Suppliers from "@/components/homepage/suppliers";
import BestQuotes from "@/components/homepage/bestQuotes";
import Buying from "@/components/homepage/buying";

const Home = () => {
  return (
    <div className="overflow-hidden md:overflow-auto">
      <Suppliers />
      <BestQuotes />
      <Buying />
      <MobileApp />
    </div>
  );
};

export default Home;
