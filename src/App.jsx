import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { fetchThreads } from "./api/index";
import { setThreads } from "./redux/threadsSlice";
import { useDispatch, useSelector } from "react-redux";
import TabsSection from "./components/TabsSection";
import ActivityFeed from "./components/ActivityFeed.js";

const App = () => {

  return (
    <div className="container">
      <Header />
      <TabsSection />
    </div>
  );
};

export default App;
