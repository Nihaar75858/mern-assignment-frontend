"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
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
  const cancelSub = () => {
    dispatch(cancelSubscription());
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="subscriptions">
      <section className="subscriptions-header">
        <h3>Active subscriptions: {activeCount}</h3>
        <button className="btn primary" onClick={createNewSub}>Add Subscription</button>
      </section>
      <ul className="subscription-list">
        {/* Added ? for rendering protection */}
        {data?.map((s: any) => (
          <li key={s.id} className="subscription-item">
            {s.status}
            {s.status == "active" && (
              <button className="btn danger ghost" onClick={cancelSub}> Cancel </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
