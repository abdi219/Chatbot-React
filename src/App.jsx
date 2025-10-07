import { useState } from "react";
import { ChatMessages } from "./components/ChatMessages";
import { ChatInput } from "./components/ChatInput";
import "./App.css";

//function ChatMessages({ chatMessages }) {
//const chatMessagesRef = React.useRef(null);
// To use a function as a hook, the function name must
// start with "use".

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  //const [chatMessages, setChatMessages] = array
  //const chatMessages = array[0]
  //const setChatMessages = array[1]

  // Note: in React, <title>{chatMessages.length} Messages</title>
  // counts as putting 2 pieces of text in <title> like this:
  // <title>{chatMessages.length} {'Messages'}</title>
  //
  // The <title> element may not support this. That's why we
  // save it in a variable first and insert it as 1 text.
  const title = `${chatMessages.length} Messages`;

  return (
    <>
      <title>{title}</title>

      <div className="app-container">
        {chatMessages.length === 0 && (
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox
            below.
          </p>
        )}
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}

export default App;
