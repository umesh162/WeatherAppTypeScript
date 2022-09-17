import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as apiClient from './apiClient';

export type Wether = {
  current: Current;
  location: Location;
  request: Request;
};

export type UserListState = {
  wether: Wether[];
  loading: boolean;
  error: boolean;
  nextPage: number;
};

const initialState: UserListState = {
  wether: [],
  loading: false,
  error: true,
  nextPage: 1,
};

export const fetchWether = createAsyncThunk<{wether: Wether[]}, {name: string}>(
  'fetchWether',
  async ({name}) => {
    const response = await apiClient.fetchWethers(name);
    if (response.kind === 'success') {
      return {
        wether: response.body ?? [],
      };
    } else {
      throw 'Error Fetching Wether';
    }
  },
);

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWether.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchWether.fulfilled, (state: any, action: any) => {
        state.wether = action.payload;
        state.loading = false;
      })
      .addCase(fetchWether.rejected, state => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default userListSlice.reducer;

export type Current = {
  cloudcover: number;
  feelslike: number;
  humidity: number;
  is_day: string;
  observation_time: string;
  precip: number;
  pressure: number;
  temperature: number;
  uv_index: number;
  visibility: number;
  weather_code: number;
  weather_descriptions: string[];
  weather_icons: string[];
  wind_degree: number;
  wind_dir: string;
  wind_speed: number;
};

export type Location = {
  country: string;
  lat: string;
  localtime: string;
  localtime_epoch: number;
  lon: string;
  name: string;
  region: string;
  timezone_id: string;
  utc_offset: string;
};

export type Request = {
  language: string;
  query: string;
  type: string;
  unit: string;
};
