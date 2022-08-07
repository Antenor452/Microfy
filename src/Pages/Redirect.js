import React, { useEffect } from "react";
import { db } from "../HelperFiles/firebaseSetup";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
  const params = useParams();
  const navigate = useNavigate();
  const getLinkInfo = async () => {
    const guestLinksRef = collection(db, "GuestLinks");
    const q = query(guestLinksRef, where("uid", "==", params.uid));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.size === 0) {
      navigate("/error");
    } else {
      const linkData = querySnapshot.docs[0].data();
      const docId = querySnapshot.docs[0].id;
      const { url, visits } = linkData;
      const docRef = doc(db, "GuestLinks", docId);
      await updateDoc(docRef, {
        visits: visits + 1,
      });
      window.open(url, "_self");
    }
    console.log(querySnapshot.size);
    console.log(querySnapshot.docs[0].data());
  };
  useEffect(() => {
    console.log(params.uid);
    getLinkInfo();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row  mt-5">
          <div className="col-12">
            <h4 className="text-center">Redirecting ...</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redirect;
