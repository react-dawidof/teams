import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPlayerList } from "./teamSlice";

const Team = (props) => {
  const dispatch = useDispatch();
  const playerList = useSelector((state) => state.team.playerList);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchPlayerList("1838315"));
        }}
      >
        Fetch Team players
      </button>

      <p>API status {playerList.status}</p>
      <div>
        {playerList.status !== "loading" &&
          playerList.data.length &&
          playerList.data.map((player) => (
            <div style={{ display: "flex" }} key={player.account_id}>
              <p>Name: {player.name}</p>
              <p>Games Played: {player.games_played}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Team;
