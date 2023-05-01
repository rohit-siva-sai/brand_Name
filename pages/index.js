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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  // useEffect(()=>{
  //  router.push("/products")
  // })
  return (
    <div className="" >
      {/* <Link href="/products">products</Link>
        <MobileApp/> */}
        <Suppliers/>
        <BestQuotes/>
        <Buying/>
        <MobileApp/>
    </div>
  );
}
