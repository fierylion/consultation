import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import UserMessages  from "./pages/User/Messages/Messages.jsx";
import UserSingleChat from "./pages/User/SingleChat/SingleChat.jsx";
import ExpertMessages from "./pages/Expert/Messages/Messages.jsx";
import  ExpertSingleChat from "./pages/Expert/SingleChat/SingleChat.jsx";
const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/messages" element={<UserMessages />} />
        <Route path="/user/messages/:id" element={<UserSingleChat />} />
        <Route path="/expert/messages" element={<ExpertMessages />} />
        <Route path="/expert/messages/:id" element={<ExpertSingleChat />} />
        {/* <Route path="/thread/:id" element={<Thread />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter