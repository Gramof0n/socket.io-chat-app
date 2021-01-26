import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = ({ join }) => {
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();

  return (
    <>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Join</Form.Label>
            {/* <Form.Control
              type="text"
              placeholder="Room name"
              onChange={(e) => setRoom(e.target.value)}
            /> */}
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={() => join(username, room)}>Join</Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Login;
