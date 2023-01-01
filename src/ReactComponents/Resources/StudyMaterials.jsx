import React from "react";
import Folder from "../Images/Red.png";

const StudyMaterials = () => {
  return (
    <>
      <div className="files_container books_container">
        <div className="folder">
          <img className="Folder_icon" src={Folder} alt="#" />
          <p className="folder_name">AI</p>
        </div>
      </div>
    </>
  );
};

export default StudyMaterials;
