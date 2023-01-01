import React, { useState } from "react";
import LabResources from "./LabResources";
import StudyMaterials from "./StudyMaterials";

const Lab = () => {
  return (
    <div className="files_container lab_container">
      <LabResources/>
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
      <LabResources />
    </div>
  );
};

const Books = () => {
  return (
    <div className="files_container books_container">
      <StudyMaterials />
      <StudyMaterials />
      <StudyMaterials />
      <StudyMaterials />
    </div>
  );
};

const FilesFolders = () => {
  return <></>;
};

export default FilesFolders;
export { Lab, Books };
