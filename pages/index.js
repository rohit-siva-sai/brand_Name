import Image from "next/image";
import { Inter } from "next/font/google";
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  // useEffect(()=>{
  //  router.push("/products")
  // })
  return (
    <div className="overflow-hidden md:overflow-auto" >
      {/* <Link href="/products">products</Link>
        <MobileApp/> */}
        
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
        {/* <input type="email" name="" id="" />
        <a href={`mailto: ${mail}?subject=${sub}&body=${bod}`}>send mail</a> */}
    </div>
  );
}
