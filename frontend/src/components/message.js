import { forwardRef } from "react";
import { Card } from "react-bootstrap";

const Message = forwardRef(({ msg, time, username }, ref) => {
  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle>
            <small>
              <strong>{username}</strong>
            </small>
            <small className="ml-3">{time}</small>
          </Card.Subtitle>
          <Card.Body tabIndex="0" ref={ref}>
            {msg}
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  );
});

export default Message;
