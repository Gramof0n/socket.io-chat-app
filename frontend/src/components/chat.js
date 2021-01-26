import React from "react";
import { io } from "socket.io-client";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import Message from "./message";

let socket;

const Chat = ({ username }) => {
  //Ref for typed messages
  const messageRef = useRef();

  //Ref for focus
  const msgCardRef = useRef();

  //Array of messages
  const [message, setMessage] = useState([]);

  useEffect(() => {
    //Connect on component render
    socket = io("http://192.168.1.2:3000");

    //Put message in array
    socket.on("message", (msg) => {
      console.log(msg.msg + " - " + msg.user);
      setMessage((message) => [...message, msg]);

      //Focus on last message
      msgCardRef.current.focus();

      //Focus back on input field
      messageRef.current.focus();
    });
  }, []);

  const onClick = () => {
    if (messageRef.current.value !== "") {
      socket.emit("message", { msg: messageRef.current.value, user: username });
      messageRef.current.value = "";
    }
    messageRef.current.focus();
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      if (messageRef.current.value !== "") {
        socket.emit("message", {
          msg: messageRef.current.value,
          user: username,
        });
        messageRef.current.value = "";
      }
      messageRef.current.focus();
    }
  };

  return (
    <Container
      style={{
        height: "100vh",
        flexGrow: "1",
        flexDirection: "column",
        border: "1px solid black",
        padding: "2em",
      }}
      className="d-flex"
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          overflow: "auto",
        }}
      >
        {message.map((msg, index) => {
          return (
            <Message
              key={index}
              msg={msg.msg}
              time={msg.time}
              username={msg.user}
              ref={msgCardRef}
            />
          );
        })}
      </section>

      <Form.Group>
        <Form.Label>Type a message:</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            ref={messageRef}
            onKeyDown={(e) => onEnter(e)}
          />
          <InputGroup.Append>
            <Button onClick={() => onClick()}>Send</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Container>
  );
};

export default Chat;
