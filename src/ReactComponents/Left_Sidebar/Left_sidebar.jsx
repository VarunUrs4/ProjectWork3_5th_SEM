import React from "react";
import logo from "../Images/Logo.png";
import Category from "./Category";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LogoutIcon from '@mui/icons-material/Logout';

const Left_sidebar = () => {
  return (
    <>
      <div className="border_curve left_sidebar">
        <div class="logo">
          <img class="logo_img" src={logo} alt="logo" />
          <h3 class="logo_title">CampVerse</h3>
        </div>
        <div className="category">
          <Category href="#" categoryClass="forum" categoryName="Forum" icon={<ForumIcon/>}/>
          <Category href="#" categoryClass="resources" categoryName="Resources" icon={<LibraryBooksIcon/>}/>
          <Category href="#" categoryClass="placements" categoryName="Placements" icon={<BusinessCenterIcon/>}/>
          <Category href="#" categoryClass="events" categoryName="Events" icon={<EmojiEventsIcon/>}/>
        </div>
        <div class="signout_container">
          {/* <div class="signout_icon"></div> */}
          <button class="signout_btn"><LogoutIcon/> Sign Out</button>
        </div>
      </div>
    </>
  );
};

export default Left_sidebar;
