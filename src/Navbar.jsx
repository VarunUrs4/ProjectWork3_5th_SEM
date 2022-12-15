import user from "./Images/user.png";
import NavbarLinks from "./NavbarLinks";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () =>{
  let curDate = new Date().toLocaleDateString();
  let curTime = new Date().toLocaleTimeString();

    return(
        <>
        <div className="border_curve navbar">
        <div className="nav_links">
          <NavbarLinks href="#" navLinkClass="home" NavLinkName="Home" icon={<HomeIcon/>}/>
          <NavbarLinks href="#" navLinkClass="about" NavLinkName="About" icon={<ContactsIcon/>}/>
          <NavbarLinks href="#" navLinkClass="contact" NavLinkName="Contact" icon={<HeadsetMicIcon/>}/>
          <NavbarLinks href="#" navLinkClass="more" NavLinkName="More" icon={<DoubleArrowIcon/>}/>
        </div>
        <div className="searchbar">
          <input type="text" className="search" placeholder="Search here " />
          <button className="search_icon"><SearchIcon/></button>
        </div>
        <div className="date_time">
          <div className="date">{curDate}</div>
          <div className="time">{curTime}</div>
        </div>
        <img className="avatar" src={user} alt="avatar" />
      </div>
        </>
    );
}

export default Navbar;