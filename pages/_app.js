import Navbar from "@/components/navFoot/navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  addDoc,
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import Footer from "@/components/navFoot/footer";
import { getAuth, signOut } from "firebase/auth";
import ProgressBar from "@/components/laons/progressBar";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [key, setKey] = useState(0);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [brandItems, setBrandItems] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [currentUser, setCurrentUser] = useState({username: "rohit siva sai",email: "example@gmail.com",phone_number: "8276545555",cart: []})
  const [showCart, setShowCart] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [category, setCategory] = useState([
    { id: -1, checked: false, label: "metal" },
    { id: 0, checked: false, label: "plastic" },
  ]);

  const [materialMetal, setMaterialMetal] = useState([
    { id: 1, checked: false, label: "mild_steel" },
    { id: 2, checked: false, label: "stainless_steel" },
    { id: 3, checked: false, label: "aluminium" },
  ]);
  const [materialPlastic, setMaterialPlastic] = useState([
    { id: 7, checked: false, label: "nylon" },
    { id: 8, checked: false, label: "abs" },
    { id: 9, checked: false, label: "pvc" },
  ]);
  const [typeMetal, setTypeMetal] = useState([
    { id: 4, checked: false, label: "long_products" },
    { id: 5, checked: false, label: "flat_products" },
    { id: 6, checked: false, label: "semi_furnished" },
  ]);
  const [typePlastic, setTypePlastic] = useState([
    { id: 10, checked: false, label: "round" },
    { id: 11, checked: false, label: "long" },
  ]);
  const [categoryBrand, setCategoryBrand] = useState([
    { id: 101, checked: false, label: "metal" },
    { id: 102, checked: false, label: "plastic" },
  ]);
  const [materialBrand, setMaterialBrand] = useState([
    { id: 111, checked: false, label: "mild_steel" },
    { id: 112, checked: false, label: "nylon" },
    { id: 113, checked: false, label: "abs" },
  ]);
  const [certificateBrand, setCertificateBrand] = useState([
    { id: 121, checked: false, label: "iso" },
    { id: 122, checked: false, label: "fda" },
  ]);
  const [applicationBrand, setApplicationBrand] = useState([
    { id: 131, checked: false, label: "automotive" },
    { id: 132, checked: false, label: "agriculture" },
    { id: 133, checked: false, label: "aerospace" },
    { id: 134, checked: false, label: "apparel" },
  ]);

  const productCollection = collection(db, "materials");
  const brandCollection = collection(db, "brands");
  const userCollection = collection(db, "users");

  const getProducts = async () => {
    try {
      const data = await getDocs(productCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const brandData = await getDocs(brandCollection);
      const filteredBrandData = brandData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // console.log(filteredData,"rohit siva sai");

      setItems(filteredData);
      setProducts(filteredData);
      setBrandItems(filteredBrandData);
      setBrandList(filteredBrandData);
      // submitNewUser();
    } catch (err) {
      console.log(err);
    }
  };

  const getCurrentUser = (cuser)=>{
    console.log(cuser,"currentuser");
    
    setCurrentUser(cuser)
  }

  const getUser = async (id) => {
    //read the data
    //set the movie list

    // getAuth()
    //   .getUser("GCiTcEWLwbOBNj2n5JEmivzN8A62")
    //   .then((userRecord) => {
    //     // See the UserRecord reference doc for the contents of userRecord.
    //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    //   })
    //   .catch((error) => {
    //     console.log("Error fetching user data:", error);
    //   });
    try {
      // const snapshot = await getDoc(doc(db, "users", id));
      // if (snapshot.exists()) {
      //   const userData = snapshot.data()
      //   setCurrentUser(userData);
      //   console.log(snapshot.data(),"rohit siva sai");

      //   console.log(currentUser, "rohit siba saiasazassasas");
      // } else {
      //   console.log("User doc missing");
      // }

      const data = await getDocs(userCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const userData = filteredData.filter((item) => item.id === id);
      console.log("usedatadf", userData[0]);
      const sliceData = userData[0]
      console.log(sliceData,"slicedata");
      

      setCurrentUser(sliceData);
      console.log("rohit siva sai", currentUser);
      if(sliceData && sliceData.id === id)
       return true
      else
       return false
    

      // console.log(filteredData, "users");
      // const ref = doc(db, "users", "GCiTcEWLwbOBNj2n5JEmivzN8A62").withConverter(cityConverter);
      // const docSnap = await getDoc(ref)
      // if (docSnap.exists()) {
      //   // Convert to City object
      //   const city = docSnap.data();
      //   // Use a City instance method
      //   console.log(city.toString());
      // }
      // //  const filteredData = data.docs.map((doc) => ({
      // //   ...doc.data(),
      // //   id: doc.id,
      // // }));
      // console.log(data);

      // setMovielist(filteredData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logOut = async () => {
    signOut(getAuth())
      .then(() => {
        console.log("Sign-out successful.");
        localStorage.removeItem("userDetails");
        handleUser(null);
        setCurrentUser(null)
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      })
  };

  const getPhoneNumber = (number) => {
    setPhoneNumber(number);
    console.log("phone", phoneNumber);
  };

  const submitNewUser = async (id) => {
    const value = getUser(id)
    try {
      if (!value) {
        await setDoc(doc(db, "users", id), {
          username: "user",
          email: "example@gmail.com",
          phone_number: phoneNumber,
          // id: auth?.currentUser?.uid,
          // id: "GCiTcEWLwbOBNj2n5JEmivzN8A62",
        });
      } else {
        // getUser(currentUser.id);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateCurrentUser = async (id, updateName, updateEmail) => {
    const userDoc = doc(db, "users", id)

    await updateDoc(userDoc, { username: updateName, email: updateEmail });
    console.log("updated successfully")
   
  };

  useEffect(() => {
    getProducts();

    try {
      if (localStorage.getItem("userDetails")) {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        // const id = userDetails.uid;
        // setUserId(userDetails.uid);
        // getUser(id)
        setUser(userDetails)

        // console.log(userDetails.uid);
      }
    } catch (error) {
      console.log(error.message);
    }
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

  //user details

  const handleUser = (userDetails) => {
    setUser(userDetails)
    console.log("userinapp", user);
  };

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
    if (router.pathname.includes("/products")) {
      let tempProducts = items;
      if (value.length > 2) {
        tempProducts = tempProducts.filter((curElement) => {
          return (
            curElement.title
              .toLowerCase()
              .search(value.toLowerCase().trim()) !== -1 ||
            curElement.category
              .toLowerCase()
              .search(value.toLowerCase().trim()) !== -1
            // curElement.title.toLowerCase().includes(value) ||
            // curElement.category.toLowerCase().includes(value)
          );
        });

        setProducts(tempProducts);
      } else {
        setProducts(items);
      }
    } else if (router.pathname.includes("/brandStore")) {
      let tempBrands = brandItems;
      if (value.length > 2) {
        tempBrands = tempBrands.filter((curElement) => {
          return (
            curElement.companyName
              .toLowerCase()
              .search(value.toLowerCase().trim()) !== -1 ||
            curElement.category
              .toLowerCase()
              .search(value.toLowerCase().trim()) !== -1
            // curElement.title.toLowerCase().includes(value) ||
            // curElement.category.toLowerCase().includes(value)
          );
        });

        setBrandList(tempBrands);
      } else {
        setBrandList(brandItems);
      }
    }
  };

  // filter category

  // const filterCategory = (value, loyal) => {
  //   let tempProducts = items;

  //   if (loyal) {
  //     tempProducts = tempProducts.filter((curElement) => {
  //       return curElement.category == value;
  //     });

  //     setProducts(tempProducts);
  //     setCategoryProducts(tempProducts);
  //   } else {
  //     setProducts(items);
  //   }
  // };
  // const filterMaterial = (value, loyal) => {
  //   let tempProducts = items;

  //   if (loyal) {
  //     tempProducts = tempProducts.filter((curElement) => {
  //       return curElement.material == value;
  //     });

  //     setProducts(tempProducts);
  //   } else {
  //     setProducts(items);
  //   }
  // };

  // const filterType = (value, loyal) => {
  //   let tempProducts = products.length != 0 ? products : items;

  //   if (loyal) {
  //     tempProducts = tempProducts.filter((curElement) => {
  //       return curElement.type == value;
  //     });

  //     setProducts(tempProducts);
  //   } else {
  //     setProducts(items);
  //   }
  // };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleChangeChecked = (id) => {
    if (id <= 0) {
      const categoryList = category;
      const changeCategoryChecked = categoryList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setCategory(changeCategoryChecked);
    } else if (id <= 3) {
      const materialMetalList = materialMetal;
      const changeMaterialMetalChecked = materialMetalList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setMaterialMetal(changeMaterialMetalChecked);
    } else if (id <= 6) {
      const typeMetalList = typeMetal;
      const changeTypeMetalChecked = typeMetalList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setTypeMetal(changeTypeMetalChecked);
    } else if (id <= 9) {
      const materialPlasticList = materialPlastic;
      const changeMaterialPlasticChecked = materialPlasticList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setMaterialPlastic(changeMaterialPlasticChecked);
    } else if (id <= 12) {
      const typePlasticList = typePlastic;
      const changeTypePlasticChecked = typePlasticList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setTypePlastic(changeTypePlasticChecked);
    }
  };

  const applyProductFilters = () => {
    let updatedList = items;
    let materialChild = [];
    let typeChild = [];
    const categoryChecked = category
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    // console.log(categoryChecked, "rohit");

    if (categoryChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoryChecked.includes(item.category)
      );
    }
    materialChild =
      categoryChecked[0] == "plastic" ? materialPlastic : materialMetal;
    const materialMetalChecked = materialChild
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (materialMetalChecked.length) {
      updatedList = updatedList.filter((item) =>
        materialMetalChecked.includes(item.material)
      );
    }
    typeChild = categoryChecked[0] === "plastic" ? typePlastic : typeMetal;
    const typeMetalChecked = typeChild
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (typeMetalChecked.length) {
      updatedList = updatedList.filter((item) =>
        typeMetalChecked.includes(item.type)
      );
    }

    setProducts(updatedList);
  };

  const handleBrandStoreChecked = (id) => {
    if (id <= 110) {
      const categoryBrandList = categoryBrand;
      const changeCategoryBrandChecked = categoryBrandList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setCategoryBrand(changeCategoryBrandChecked);
    } else if (id <= 120) {
      const materialBrandList = materialBrand;
      const changeMaterialBrandChecked = materialBrandList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setMaterialBrand(changeMaterialBrandChecked);
    } else if (id <= 130) {
      const certificateBrandList = certificateBrand;
      const changeCertificateBrandChecked = certificateBrandList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setCertificateBrand(changeCertificateBrandChecked);
    } else if (id <= 140) {
      const applicationBrandList = applicationBrand;
      const changeApplicationBrandChecked = applicationBrandList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setApplicationBrand(changeApplicationBrandChecked);
    }
  };

  const applyBrandStoreFilters = () => {
    let updatedList = brandItems;

    const categoryChecked = categoryBrand
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoryChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoryChecked.includes(item.category)
      );
    }

    const materialBrandChecked = materialBrand
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (materialBrandChecked.length) {
      updatedList = updatedList.filter((item) =>
        materialBrandChecked.includes(item.material.toLowerCase())
      );
    }

    const certificateBrandChecked = certificateBrand
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (certificateBrandChecked.length) {
      updatedList = updatedList.filter((item) =>
        certificateBrandChecked.includes(item.certifications.toLowerCase())
      );
    }
    const applicationBrandChecked = applicationBrand
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (applicationBrandChecked.length) {
      updatedList = updatedList.filter((item) =>
        applicationBrandChecked.includes(item.application.toLowerCase())
      );
    }

    setBrandList(updatedList);
  };

  useEffect(() => {
    applyProductFilters();
    applyBrandStoreFilters();
  }, [
    materialMetal,
    typeMetal,
    category,
    materialPlastic,
    typePlastic,
    categoryBrand,
    materialBrand,
    certificateBrand,
    applicationBrand,
  ]);
  const [showLogin, setShowLogin] = useState(false);
  // console.log('user',user);


  const changeShowLogin = (value) => {
    setShowLogin(value);
  }

  return (
    <>
      <Navbar
        filterSearch={filterSearch}
        handleShowCart={handleShowCart}
        currentUser={currentUser}
        handleUser={handleUser}
        submitNewUser={submitNewUser}
        user={user}
        getPhoneNumber={getPhoneNumber}
        changeShowLogin={changeShowLogin}
        showLogin={showLogin}
      />
      <ProgressBar />
      <Component
        {...pageProps}
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
        clearCart={clearCart}
        key={key}
        items={items}
        materialMetal={materialMetal}
        typeMetal={typeMetal}
        materialPlastic={materialPlastic}
        typePlastic={typePlastic}
        category={category}
        changeChecked={handleChangeChecked}
        categoryBrand={categoryBrand}
        materialBrand={materialBrand}
        certificateBrand={certificateBrand}
        applicationBrand={applicationBrand}
        handleBrandStoreChecked={handleBrandStoreChecked}
        brandList={brandList}
        showCart={showCart}
        currentUser={currentUser}
        logOut={logOut}
        user={user}
        handleUser={handleUser}
        phoneNumber={phoneNumber}
        getCurrentUser={getCurrentUser}
        updateCurrentUser={updateCurrentUser}
        showLogin={showLogin}
        changeShowLogin={changeShowLogin}
      />
      {/* <Footer /> */}
    </>
  );
}
