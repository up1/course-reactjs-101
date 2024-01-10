import { createSlice } from '@reduxjs/toolkit';

const demoSlice = createSlice({
  name: 'demo',
  initialState: {
    value: 'Hello from context!',
  },
  reducers: {
    sayHi: () => {
      console.log('Hi from DemoContextProvider');
      localStorage.setItem('demo_data_redux', JSON.stringify({ msg: 'Hello from context!' }));
      sessionStorage.setItem('demo_data_redux', JSON.stringify({ msg: 'Hello from context!' }));
    },
  },
});

export const { sayHi } = demoSlice.actions;

export default demoSlice.reducer;