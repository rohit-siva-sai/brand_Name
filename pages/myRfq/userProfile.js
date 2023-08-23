import Sidebar from "@/components/myRfq/sidebar";
import ComapnyDetails from "@/components/userProfile/companyDetails";
import UserDetails from "@/components/userProfile/userDetails";
import React from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { db } from "@/config/firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { User } from "@/useStore/user";

const UserProfile = ({ user, phoneNumber }) => {
  const [updatePhoneNumber,updateUserDetails,updateUserId] = User((store) => [store.updatePhoneNumber,store.updateUserDetails,store.updateUserId]);

  const [profileUser, setProfileUser] = useState({
  
  })

  const getUser = async (id) => {
    try {
      const userRef = doc(db, "users", id); // 'people' is the collection name
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setProfileUser(userData);
        updateUserDetails(userData)
        updatePhoneNumber(userData.phone_number)
        console.log(userData, "rohit siva sai");
        return true;
      } else {
        console.log("No such document!");
        return false;
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const submitNewUser = async (id) => {
    const value = await getUser(id);
    console.log("value", value);
    try {
      if (!value) {
        await setDoc(doc(db, "users", id), {
          username: {firstName: "reddy",lastName: "rohit"},
          email: "example@gmail.com",
          phone_number: user?.phoneNumber,
        });
        await getUser(id)
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
        handleUser(null);
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
        updateUserId(id)
        submitNewUser(id);
        // getCurrentUser(profileUser)

        // console.log(userDetails.uid);
      }
    } catch (error) {
      console.log(error.message);
    }
    if (!user) {
      // router.push("/");
    }
  }, [router]);
  return (
    <div className="h-[640px] overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="h-[640px]  bg-gray-100  px-6 flex-1 pb-8  overflow-y-scroll ">
          <div className="flex flex-col space-y-8">
            <UserDetails profileUser={profileUser} getUser={getUser} />
            <ComapnyDetails profileUser={profileUser} getUser={getUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
