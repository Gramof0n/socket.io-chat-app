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
    localStorage.setItem("username", username);
  };

  //Handle logout
  const logout = () => {
    localStorage.removeItem("username");
    window.location.reload(false);
  };

  return (
    <>
      {!localStorage.getItem("username") ? (
        <Login join={join} />
      ) : (
        <Chat username={username} logout={logout} />
      )}
    </>
  );
}

export default App;
