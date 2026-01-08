"use client";

import { AppDispatch } from '@/store';
import { cancelSubscription } from '@/store/subscriptionsSlice';
import { useDispatch } from 'react-redux';

const UpdateSubscription = () => {
  // Set up useDispatch for retrieving and sending data
  const dispatch = useDispatch<AppDispatch>();

  // function to send data over to db
  const createNewSub = () => {
    dispatch(cancelSubscription());
    alert("Subscription cancelled successfully");
  };

  return (
    <div>
      <button onClick={createNewSub}>Update Subscription</button>
    </div>
  );
}

export default UpdateSubscription