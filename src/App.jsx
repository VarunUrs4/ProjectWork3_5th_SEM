import React from "react";
import Left_sidebar from "./ReactComponents/Left_Sidebar/Left_sidebar";
import Navbar from "./ReactComponents/NavBar/Navbar";
import Post from "./ReactComponents/Central_Section/Post";
import Central_Section from "./ReactComponents/Central_Section/Central_Section";
import Chart from "./ReactComponents/Central_Section/Chart";
import Notifications from "./ReactComponents/Notify/Notifications";
import EventsContainer from "./ReactComponents/EventsPage/EventsContainer";
import ResourcesOuter from "./ReactComponents/Resources/ResourcesOuter";
import { useState } from "react";

const App = () => {
  return (
    <>
      <Left_sidebar />
      <Navbar />
      {/* <ResourcesOuter /> */}
      <Central_Section/>
      <Post/>
    <Chart/>
    <Notifications/>
    </>
  );
};

export default App;
