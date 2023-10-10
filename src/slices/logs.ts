import {createSlice} from '@reduxjs/toolkit';

const initialState: any[] = [];
const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    setLogs: (state, action) => {
      const data = action.payload;
      state.unshift(data);
    },
    clearLogs: () => {
      return [];
    },
  },
});

const {reducer, actions} = logsSlice;
export const {setLogs, clearLogs} = actions;
export default reducer;
