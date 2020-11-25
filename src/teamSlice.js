import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlayerList = createAsyncThunk(
  "team/playerListLoading",
  (teamId) =>
    axios
      .get(`https://api.opendota.com/api/teams/${teamId}/players`)
      .then((response) => response.data)
      .catch((error) => error)
);

const teamInitialState = {
  playerList: {
    status: "idle",
    data: {},
    error: {}
  }
};

const teamSlice = createSlice({
  name: "team",
  initialState: teamInitialState,
  reducers: {},
  extraReducers: {
    [fetchPlayerList.pending.type]: (state, action) => {
      state.playerList = {
        status: "loading",
        data: {},
        error: {}
      };
    },
    [fetchPlayerList.fulfilled.type]: (state, action) => {
      state.playerList = {
        status: "idle",
        data: action.payload,
        error: {}
      };
    },
    [fetchPlayerList.rejected.type]: (state, action) => {
      state.playerList = {
        status: "idle",
        data: {},
        error: action.payload
      };
    }
  }
});

export default teamSlice;
