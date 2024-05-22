import { useState } from "react";

function HomeworkA() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello",
      author: "user",
      side: "outbox",
    },
    {
      id: 2,
      text: "Hi",
      author: "Admin",
      side: "inbox",
    },
    {
      id: 3,
      text: "How are you?",
      author: "user",
      side: "outbox",
    },
    {
      id: 4,
      text: "i'm fine",
      author: "Admin",
      side: "inbox",
    },
  ]);

  const deleteMessage = (id) => {
    setMessages(
      messages.filter((item) => {
        if (item.id === id) {
          return false;
        } return item
      })
    )
    
  };

  return (
    <>
      {messages.map((message) => {
        return (
          <div
            className={`row ${
              message.side === "inbox" ? "justify-content-end" : ""
            }`}
          >
            <div className="message__blocks col-3">
              <div className={message.side}>
                <h4>{message.author}</h4>
                <p>{message.text}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMessage(message.id)}
                >
                  x
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HomeworkA;
