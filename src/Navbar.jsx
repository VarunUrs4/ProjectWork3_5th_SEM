import user from "./Images/user.png";

const Navbar = () =>{
    return(
        <>
        <div class="border_curve navbar">
        <div class="nav_links">
          <a href="#" class="home"><h3>Home</h3></a>
          <a href="#" class="about"><h3>About</h3></a>
          <a href="#" class="contact"><h3>Contact</h3></a>
          <a href="#" class="more"><h3>More</h3></a>
        </div>
        <div class="searchbar">
          <input type="text" class="search" placeholder="Search here" />
          <button class="search_icon">🔎</button>
        </div>
        <div class="date_time">
          <div class="date">09/12/2022</div>
          <div class="time">23:14:50</div>
        </div>
        <img class="avatar" src={user} alt="avatar" />
      </div>
        </>
    );
}

export default Navbar;