import React from 'react';
import PDF from "../Images/pdf.jpeg";

const PdfFiles = () => {
    return (
        <>
              <button className="pdf_file">
                <img className="pdf_icon" src={PDF} alt="#" />
                <p className="pdf_name">Artificial Intelligence</p>
              </button>
          
        </>);
}

export default PdfFiles;