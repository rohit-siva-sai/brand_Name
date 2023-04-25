import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const productCollection = collection(db, "materials");
  // const setPro = useStore((state) => state.setProducts);
  const getProducts = async () => {
    try {
      // setLoading(true);
      const data = await getDocs(productCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);

      setProducts(filteredData);
      setItems(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [router]);

  // filter Search

  const filterSearch = (value) => {
    let tempProducts = products;
    if (value.length > 2) {
      tempProducts = tempProducts.filter((curElement) => {
        return (
          curElement.title.toLowerCase().includes(value) ||
          curElement.category.toLowerCase().includes(value)
        );
      });

      setProducts(tempProducts);
    } else {
      setProducts(items);
    }
  };

  // filter category

  const filterCategory = (value,loyal) => {
    let tempProducts = products;

    if (loyal) {
      tempProducts = tempProducts.filter((curElement) => {
        return curElement.category == value;
      });

      setProducts(tempProducts);
    } else {
      setProducts(items);
    }
  };

  return (
    <>
      <Navbar filterSearch={filterSearch} />
      <Component {...pageProps} products={products} filterCategory={filterCategory} />
    </>
  );
}
