"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { addSubscription, fetchSubscriptions } from "../store/subscriptionsSlice";

export const SubscriptionsTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, activeCount, loading } = useSelector(
    (state: any) => state.subscriptions
  );

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  // function to send data over to db
  const createNewSub = () => {
    dispatch(addSubscription());
    alert("Subscription added successfully");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h3>Active subscriptions: {activeCount}</h3>
      <ul>
        {data.map((s: any) => (
          <li key={s.id}>{s.status}</li>
        ))}
      </ul>
      <button onClick={createNewSub}>Add Subscription</button>
    </>
  );
};
