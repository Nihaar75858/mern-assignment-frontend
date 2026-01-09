"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import subscriptionsSlice from '../store/subscriptionsSlice';
import {
  addSubscription,
  cancelSubscription,
  fetchSubscriptions,
} from "../store/subscriptionsSlice";

export const SubscriptionsTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, activeCount, loading } = useSelector(
    (state: any) => state.subscriptions
  );

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  // function to add new subscription
  const createNewSub = () => {
    dispatch(addSubscription());
  };

  // function to update subscription
  const cancelSub = (subscriptionsId: String) => {
    dispatch(cancelSubscription(subscriptionsId));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="subscriptions">
      <section className="subscriptions-header">
        <h3>Active subscriptions: {activeCount}</h3>
        {/* Placed Add New Subscription over here */}
        <button className="btn primary" onClick={createNewSub}>
          Add Subscription
        </button>
      </section>
      <ul className="subscription-list">
        {/* Added ? for rendering protection */}
        {data?.map((s: any) => (
          <li key={s.id} className="subscription-item">
            {s.status}
            {s.status == "active" && (
              // Added cancelSub everytime we get an "active" subscription
              <button className="btn danger ghost" onClick={() => cancelSub(s.id)}>
                {" "}
                Cancel{" "}
              </button>
            )}
          </li>
        ))}
      </ul>

        {/* Added validation for list in case no data is found. */}
      {data.length === 0 && <p className="muted">No subscriptions found.</p>}
    </section>
  );
};
