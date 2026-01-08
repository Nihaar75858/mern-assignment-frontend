"use client";
// New
import { AppDispatch } from "@/store";
import { addSubscription } from "@/store/subscriptionsSlice";
import { useDispatch, useSelector } from "react-redux";

const AddSubscription = () => {
  // Set up useDispatch for retrieving and sending data
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: any) => state.subscriptions);

  // Save data length for indexing
  const prevlength = data.length;

  // function to send data over to db
  const createNewSub = () => {
    dispatch(addSubscription({ id: prevlength + 1, status: "active" }));
    alert("Button exists");
  };

  return (
    <div>
      <button onClick={createNewSub}>Add Subscription</button>
    </div>
  );
};

export default AddSubscription;
