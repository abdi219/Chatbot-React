import { useState } from "react";
import { Chatbot } from "supersimpledev";
import spinnerImage from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    // Clear textbox immediately
    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    // Instead of just showing messages,
    // temporarily show a loading spinner
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={spinnerImage} className="loading-spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    // Changed to async
    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="input-element"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
