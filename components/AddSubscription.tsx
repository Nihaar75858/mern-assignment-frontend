"use client";

import { AppDispatch } from "@/store";
import { addSubscription } from "@/store/subscriptionsSlice";
import { useDispatch } from "react-redux";

const AddSubscription = () => {
  // Set up useDispatch for retrieving and sending data
  const dispatch = useDispatch<AppDispatch>();

  // function to send data over to db
  const createNewSub = () => {
    dispatch(addSubscription());
    alert("Subscription added successfully");
  };

  return (
    <div>
      <button onClick={createNewSub} >Add Subscription</button>
    </div>
  );
};

export default AddSubscription;
