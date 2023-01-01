import React from "react";
import user from "../Images/user.png";

const Post = () => {
    return(<>
        <div className="border_curve post">
        <div className="user_name">Name</div>
        <img className="avatar" alt="" src={user} />
        <input type="text" className="post_msg" placeholder="Type your comment" />
        <button className="post_btn">Post</button>
      </div>
    </>);
}

export default Post;