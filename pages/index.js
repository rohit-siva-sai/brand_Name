import Image from 'next/image'
import { Inter } from 'next/font/google'
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <Link href="/products">products</Link>
    </main>
  )
}
