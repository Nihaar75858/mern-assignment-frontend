import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

export const fetchSubscriptions = createAsyncThunk(
  "subscriptions/fetch",
  async () => {
    const res = await fetch('/api/subscriptions');
    return res.json();
  }
);

// Implemented addSubscription for adding subscription
export const addSubscription = createAsyncThunk(
  "subscriptions/add",
  async (newSub: any) => {
    const res = await fetch('/api/subscriptions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newSub)
    });

    return res.json();
  }
)

type Subscription = {
  id: string;
  status: 'active' | 'cancelled';
};

type SubscriptionsState = {
  data: Subscription[];
  loading: boolean;
  activeCount: number;
};

const initialState: SubscriptionsState = {
  data: [],
  loading: false,
  activeCount: 0
};

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.activeCount = action.payload.filter(
          (s: Subscription) => s.status === 'active'
        ).length;
        state.loading = false;
      });
  }
});

export default subscriptionsSlice.reducer;
