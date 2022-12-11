import React from "react";
import logo from "./Images/Logo.png";

const Left_sidebar = () =>{
    return(<>
        <div class="border_curve left_sidebar">
        <div class="logo">
          <img class="logo_img"  src={logo} alt="logo" />
          <h3 class="logo_title">CampVerse</h3>
        </div>
        <div class="category">
          <a href="#" class="forum"><h3>Forum</h3></a>
          <a href="#" class="resources"><h3>Resources</h3></a>
          <a href="#" class="placements"><h3>Placements</h3></a>
          <a href="#" class="events"><h3>Events</h3></a>
        </div>
        <div class="signout_container">
          {/* <div class="signout_icon"></div> */}
          <button class="signout_btn">Sign Out</button>
        </div>
      </div>
    </>);
}

export default Left_sidebar;