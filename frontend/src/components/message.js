import { forwardRef } from "react";
import { Card } from "react-bootstrap";

const Message = forwardRef(({ msg, time, username }, ref) => {
  return (
    <div
      style={{
        margin: "0 2em 0 2em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        className="mb-3"
        style={
          username == localStorage.getItem("username")
            ? {
                maxWidth: "300px",
                minWidth: "250px",
                borderRadius: "20px",
                backgroundColor: "#f5f5f5",
                alignSelf: "flex-end",
              }
            : {
                maxWidth: "300px",
                minWidth: "250px",
                borderRadius: "20px",
                backgroundColor: "#cfecff",
                alignSelf: "flex-start",
              }
        }
        tabIndex="0"
        ref={ref}
      >
        <Card.Body>
          <Card.Subtitle>
            <small>
              <strong>{username}:</strong>
            </small>
            <small className="ml-1">{time}</small>
          </Card.Subtitle>
          <Card.Body>{msg}</Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
});

export default Message;
