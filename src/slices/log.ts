import {createSlice} from '@reduxjs/toolkit';

const initialState: any = [];

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    setLog: (state, action) => {
      const newState = JSON.parse(JSON.stringify(state));
      console.log(newState);
      newState.unshift(action.payload);
    },
    clearLog: () => {
      return [];
    },
  },
});

const {reducer, actions} = logSlice;
export const {setLog, clearLog} = actions;
export default reducer;
