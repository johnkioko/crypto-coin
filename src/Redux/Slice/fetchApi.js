import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FETCH_CRYPTO_DATA from './Action_Type';

const url = 'https://api.coincap.io/v2/assets';

const FetchCryptos = createAsyncThunk(FETCH_CRYPTO_DATA, async (thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export default FetchCryptos;
