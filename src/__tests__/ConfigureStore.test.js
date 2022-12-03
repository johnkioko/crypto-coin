import store from '../Redux/ConfigureStore';

describe('symbols redux tests', () => {
  it('Should initially set Cryptos to an object', () => {
    const state = store.getState().cryptoReducer;
    expect(state).toEqual({ cryptos: [], status: '' });
  });
});
