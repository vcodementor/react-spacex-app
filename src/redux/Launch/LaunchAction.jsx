import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../graphql/apollo-client'; 
import { GET_SPACEX_LIST , GET_SPACEX_DETAIL } from '../../graphql/queries/spacex';

export const fetchLaunchList = createAsyncThunk(
  'launch/fetchLaunchList',
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const { data } = await client.query({
        query: GET_SPACEX_LIST,
        variables: { limit, offset },
      });
      return data.launches;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

export const fetchLaunchDetail = createAsyncThunk(
  'launch/fetchLaunchDetail',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const { data } = await client.query({
        query: GET_SPACEX_DETAIL,
        variables: { "id" : id.id },
      });
      console.log(data);
      return data.launch;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
