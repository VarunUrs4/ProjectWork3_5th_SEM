import React from "react";
import user from "./Images/user.png";
import other_user from "./Images/other_user.png";


const Central_Section = () => {
    return(<>
        <div class="border_curve central_section">
        <div class="forum_community">
          <button class="dept CSE">CSE</button>
          <button class="dept ECE">ECE</button>
          <button class="dept ISE">ISE</button>
          <button class="dept ML">ML</button>
        </div>
        <div class="forum_header">
          <h4>Forum</h4>
          <h4>Body</h4>
          <h4>Likes</h4>
        </div>
        <div class="forum_body">
          <div class="posted_user_name">Name</div>
          <button class="bookmark">Bookmark 📖</button>
          <button class="follow">Follow 🙏</button>
          <div class="posted_date_time">
            <div class="date">09/12/2022</div>
            <div class="time">23:14:50</div>
          </div>
          <img class="avatar" alt="" src={other_user} />
          <div class="posted_msg_body"></div>
          <button
            class="upvote"
            target="page"
            onclick="window.open('https://www.google.com','_self');"
          >
            👍
          </button>
          <button class="downvote">👎</button>
        </div>
      </div>
    </>);
}

export default Central_Section;