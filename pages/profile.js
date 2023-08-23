import ProfileMain from "@/components/profilePage/profileMain";
import ProfileSideBar from "@/components/profilePage/profileSideBar";
import { db } from "@/config/firebase";
import { getAuth, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

const Profile = ({
  currentUser,
  updateCurrentUser,
  handleUser,
  phoneNumber,
  user,
  getCurrentUser,
}) => {
  const [profileUser, setProfileUser] = useState({
    username: "",
    email: "",
    phone_number: "",
    cart: [],
  });
  const userCollection = collection(db, "users");
  // console.log(phoneNumber);
 

  const getUser = async (id) => {
    try {
      const data = await getDocs(userCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const userData = filteredData.filter((item) => item.id === id);
      console.log("usedatadfinprofile", userData[0]);
      const sliceData = userData[0];
      console.log(sliceData, "slicedata");

      setProfileUser(sliceData)
      console.log("rohit siva sai", profileUser);
      // getCurrentUser(profileUser)
      if (sliceData && sliceData.id === id) return true;
      else return false;
    } catch (err) {
      console.log(err.message);
    }
  }
  const submitNewUser = async (id) => {
    const value = await getUser(id)
    console.log("value", value);

    try {
      if (!value) {
        await setDoc(doc(db, "users", id), {
          username: "user",
          email: "example@gmail.com",
          phone_number: phoneNumber,
        
        });
        await getUser(id);
      } else {
        // getUser(currentUser.id);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logOut = async () => {
    signOut(getAuth())
      .then(() => {
        console.log("Sign-out successful.");
        localStorage.removeItem("userDetails");
        handleUser(null)
        setProfileUser({ username: "", email: "", phone_number: "", cart: [] });
        router.push("/");
        router.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateProfileUser = async (id, updateName, updateEmail) => {
    const userDoc = doc(db, "users", id);

    await updateDoc(userDoc, { username: updateName, email: updateEmail });
    console.log("updated successfully");
    getUser(id);
  };

  const router = useRouter();
  useEffect(() => {
    try {
      if (localStorage.getItem("userDetails")) {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        const id = userDetails.uid;
        submitNewUser(id)
        // getCurrentUser(profileUser)

        // console.log(userDetails.uid);
      }
    } catch (error) {
      console.log(error.message);
    }
    // if (!user) {
    //   router.push("/");
    // }
  }, [router]);
  return (
    <div>
      <div className="flex">
        <ProfileSideBar profileUser={profileUser} />
        <ProfileMain
          profileUser={profileUser}
          logOut={logOut}
          updateProfileUser={updateProfileUser}
        />
      </div>
    </div>
  );
};

export default Profile;
