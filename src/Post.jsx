import React from "react";
import user from "./Images/user.png";

const Post = () => {
    return(<>
        <div class="border_curve post">
        <div class="user_name">Name</div>
        <img class="avatar" alt="" src={user} />
        <input type="text" class="post_msg" placeholder="Type your comment" />
        <button class="post_btn">Post</button>
      </div>
    </>);
}

export default Post;