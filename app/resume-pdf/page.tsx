'use client';
import { useState } from "react";



const RESUME_PDF_URL = 'http://localhost:3000/Resume.pdf';

const DownloadResumePDF = () => {
  const downloadFileAtURL = (url: any) => {
    const fileName = url.split('/').pop('a');
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  };

  return (
    <div 
    style={{backgroundImage:'url(/mountains.jpg'}}
      className="w-screen h-screen flex justify-center items-center"
    >
      <button 
        onClick={() => downloadFileAtURL(RESUME_PDF_URL)} 
        className="px-6 py-4 border-2 border-teal-500 rounded-md text-green-600"
      >
        Download File
      </button>
      
    </div>
  )
};


 
export default DownloadResumePDF;