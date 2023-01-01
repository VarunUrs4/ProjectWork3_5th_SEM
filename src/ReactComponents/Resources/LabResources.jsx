import React, { useState } from "react";
import Folder from "../Images/Red.png";
import PDF from "../Images/pdf.jpeg";
import PdfFiles from "./PdfFiles";


const LabResources = () => {
  const OpenBooks = () => {
    return (
      <>
      <div className="openfiles">
      <button className="close_btn_in_openedPDF_Files" onClick={toggleOpenFolder}>X</button>
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
        <PdfFiles />
      </div>
      </>
    );
  };
  const [openfolder, setopenfolder] = useState(false);

  const toggleOpenFolder = () => {
    setopenfolder(!openfolder);
  };

  return (
    <>
      {openfolder ? <OpenBooks /> : null}
        <button className="folder" onClick={toggleOpenFolder}>
          <img className="Folder_icon" src={Folder} alt="#" />
          <p className="folder_name">Artificial Intelligence</p>
        </button>
      {/* <div className="files_container lab_container">
      </div> */}
    </>
  );
};

export default LabResources;
