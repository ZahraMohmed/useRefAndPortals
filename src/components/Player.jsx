import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const PlayerName = useRef()
  const [enterPlayerName, setPlayerName] =  useState(null)
  const handellerPlayerName = ()=>{
    setPlayerName(PlayerName.current.value)
    PlayerName.current.value = ""
  }
  return (
    <section id="player">
      <h2>{enterPlayerName ?? "Welcome unknown entity"}</h2>
      <p>
        <input ref={PlayerName} type="text" />
        <button onClick={handellerPlayerName}>Set Name</button>
      </p>
    </section>
  );
}
