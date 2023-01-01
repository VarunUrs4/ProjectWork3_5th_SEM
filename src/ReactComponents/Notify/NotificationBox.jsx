const NotificationBox = (props) => {
  return (
    <>
      <div className="notify_box">
        <div className="notify_heading">
          <h4>{props.Notifications}</h4>
        </div>
        <a href="#" className="notify_btn">
          Check
        </a>
      </div>
    </>
  );
};

export default NotificationBox;
