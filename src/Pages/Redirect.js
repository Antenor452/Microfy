import React, { useEffect } from "react";
import { db } from "../HelperFiles/firebaseSetup";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
  const uid = useParams();
  const navigate = useNavigate();
  const getLinkInfo = async () => {
    const guestLinksRef = collection(db, "GuestLinks");
    const q = query(guestLinksRef, where("visitCount", "==", 0));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.size === 0) {
      navigate("/error");
    } else {
      const linkData = querySnapshot.docs[0].data();
      const { uid, url, visits } = linkData;
      window.open(url);
    }
    console.log(querySnapshot.size);
    console.log(querySnapshot.docs[0].data());
  };
  useEffect(() => {
    console.log(uid);
    getLinkInfo();
  }, []);
  return <div>Redirect</div>;
};

export default Redirect;
