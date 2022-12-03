import { createSlice } from '@reduxjs/toolkit';
import FetchCryptos from './fetchApi';

const initialState = {
  cryptos: [],
  status: '',
};

const CryptoSlice = createSlice({
  name: 'cryptoReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [FetchCryptos.pending]: (state) => {
      state.status = 'loading';
    },

    [FetchCryptos.fulfilled]: (state, action) => {
      state.status = 'success';
      state.cryptos = [
        ...state.cryptos,
        action.payload.data.filter((i) => i.rank <= 10),
      ];
    },

    [FetchCryptos.rejected]: (state) => {
      state.status = 'failure';
    },
  },
});

export default CryptoSlice.reducer;
