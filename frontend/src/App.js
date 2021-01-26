import { useState } from "react";
import "./App.css";
import Chat from "./components/chat";
import Login from "./components/login";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const join = (username, room) => {
    setUsername(username);
    setRoom(room);
  };
  return (
    <>{!username ? <Login join={join} /> : <Chat username={username} />}</>
  );
}

export default App;
