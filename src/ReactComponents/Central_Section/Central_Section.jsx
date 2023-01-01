import ForumDept from "./ForumDept";
import ForumBody from "./ForumBody";

const Central_Section = () => {
    return(<>
        <div className="border_curve central_section">
         <div className="forum_community">
          <ForumDept ForumClassName="dept CSE" dept="CSE" />
          <ForumDept ForumClassName="dept ECE" dept="ECE" />
          <ForumDept ForumClassName="dept ISE" dept="ISE" />
          <ForumDept ForumClassName="dept ML" dept="ML" />
        </div>
        <div className="forum_header">
          <h4>Forum</h4>
          <h4>Body</h4>
          <h4>Likes</h4>
        </div>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        <ForumBody/>
        </div>
    </>);
}

export default Central_Section;