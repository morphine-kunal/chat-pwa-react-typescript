import React from "react";
import ChatHeader from "./components/ChatHeader";
import ChatDescription from "./components/ChatDescription";
import ChatSection from "./components/ChatSection";

function App() {
  return (
    <div>
      <div
        style={{ position: "fixed", top: "0px", left: "0px", zIndex: "999", width:'100%', background: '#FAF9F4', height:'20%' }}
      >
        <ChatHeader />
        <ChatDescription />
      </div>
      <div style={{marginTop: '12em'}}>
        <ChatSection />
      </div>
    </div>
  );
}

export default App;
