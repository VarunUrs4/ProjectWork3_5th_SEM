import React from "react";
import Left_sidebar from "./Left_sidebar";
import Navbar from "./Navbar";
import Post from "./Post";
import Central_Section from "./Central_Section";
import Chart from "./Chart";
import Notifications from "./Notifications";

const App = () => {
return (<>
    <Left_sidebar/>
    <Navbar/>
    <Central_Section/>
    <Post/>
    <Chart/>
    <Notifications/>
</>);
}

export default App;