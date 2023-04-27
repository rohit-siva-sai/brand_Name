import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [key, setKey] = useState(0);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const productCollection = collection(db, "materials");

  const getProducts = async () => {
    try {
      const data = await getDocs(productCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // console.log(filteredData,"rohit siva sai");

      setProducts(filteredData);
      setItems(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
        // console.log("rohit siva sai rohit siva sai", cart);
      }
    } catch (err) {
      console.log(err);
      localStorage.clear();
    }
  }, [router]);

  //save Cart
  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setKey(Math.random());
   
  };

  const addToCart = (itemcode, qty, title, imgUrl) => {
    let newCart = {};
    newCart = cart;
    // console.log(cart, "rohit siva sai");

    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      newCart[itemcode] = { qty: 1, title, imgUrl };
    }
    saveCart(newCart);
    setCart(newCart);
  };

  const removeFromCart = (itemcode, qty, title, imgUrl) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
      delete newCart[itemcode];
    }
    // if (newCart[itemcode].qty <= 0) {
    // }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

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

  const filterCategory = (value, loyal) => {
    let tempProducts = items;

    if (loyal) {
      tempProducts = tempProducts.filter((curElement) => {
        return curElement.category == value;
      });

      setProducts(tempProducts);
    } else {
      setProducts(items);
    }
  };
  const filterMaterial = (value, loyal) => {
    let tempProducts = products;

    if (loyal) {
      tempProducts = tempProducts.filter((curElement) => {
        return curElement.material == value;
      });

      setProducts(tempProducts);
    } else {
      setProducts(items);
    }
  };
  const filterType = (value, loyal) => {
    let tempProducts = products;

    if (loyal) {
      tempProducts = tempProducts.filter((curElement) => {
        return curElement.type == value;
      });

      setProducts(tempProducts);
    } else {
      setProducts(items);
    }
  };

  return (
    <>
      <Navbar filterSearch={filterSearch} />
      <Component
        {...pageProps}
        products={products}
        filterCategory={filterCategory}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
        clearCart={clearCart}
        key={key}
        filterMaterial={filterMaterial}
        filterType={filterType}
      />
    </>
  );
}
