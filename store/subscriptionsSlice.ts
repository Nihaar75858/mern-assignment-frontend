import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubscriptions = createAsyncThunk(
  "subscriptions/fetch",
  async () => {
    const res = await fetch("/api/subscriptions");
    return res.json();
  }
);

// Implemented addSubscription for adding subscription
export const addSubscription = createAsyncThunk(
  "subscriptions/add",
  async () => {
    const res = await fetch("/api/subscriptions", {
      method: "POST",
    });

    return res.json();
  }
);

// Implemented cancelSubscription for canceling Subcription
export const cancelSubscription = createAsyncThunk(
  "subscriptions/patch",
  async () => {
    const res = await fetch("/api/subscriptions", {
      method: "PATCH",
    });

    return res.json();
  }
);

type Subscription = {
  id: string;
  status: "active" | "cancelled";
};

type SubscriptionsState = {
  data: Subscription[];
  loading: boolean;
  activeCount: number;
};

const initialState: SubscriptionsState = {
  data: [],
  loading: false,
  activeCount: 0,
};

const subscriptionsSlice = createSlice({
  name: "subscriptions",
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
          (s: Subscription) => s.status === "active"
        ).length;
        state.loading = false;
      })
      .addCase(cancelSubscription.fulfilled, (state, action) => {
        const cancelled = action.payload;

        if (!cancelled) return;

        const index = state.data.findIndex((s: any) => s.id === cancelled.id);

        if (index == -1) {
          state.data[index].status = "cancelled";
        }
      });
  },
});

export default subscriptionsSlice.reducer;
