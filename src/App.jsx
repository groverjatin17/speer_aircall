import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { fetchActivities } from "./api/index";
import { setActivities } from "./redux/activitiesSlice";
import { useDispatch, useSelector } from "react-redux";
import TabsSection from "./components/TabsSection";
import ActivityFeed from "./components/ActivityFeed.js";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchActivities().then((response) =>
      dispatch(setActivities(response.data))
    );
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <TabsSection />
    </div>
  );
};

export default App;
