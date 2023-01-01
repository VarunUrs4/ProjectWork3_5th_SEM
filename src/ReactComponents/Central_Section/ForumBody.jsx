import other_user from "../Images/other_user.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const ForumBody = (props) => {
  let curDate = new Date().toLocaleDateString();
  let curTime = new Date().toLocaleTimeString();

  return (
    <>
      <div className="forum_body">
        <div className="posted_user_name">Name</div>
        <button className="forum_icons bookmark">Bookmark <BookmarkIcon/></button>
        <button className="forum_icons follow">Follow <PersonAddAlt1Icon/></button>
        <div className="posted_date_time">
          <div className="date">{curDate}</div>
          <div className="time">{curTime}</div>
        </div>
        <img className="avatar" alt="" src={other_user} />
        <div className="posted_msg_body"></div>
        <button
          className="forum_icons upvote"
          target="page"
          onClick={()=>window.open("https://www.youtube.com")}
        >
          <ThumbUpIcon/>
        </button>
        <button className="forum_icons downvote"><ThumbDownIcon/></button>
      </div>
    </>
  );
};

export default ForumBody;
