"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";

const DownloadCV = () => {
  // Update this path to match your PDF file location
  const cvUrl = "/ankon_roy_resume.pdf"; // e.g., "/resume.pdf", "/cv.pdf"

  const handleDownloadClick = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    
    // Set the download attribute with filename
    link.download = 'ankon_roy_resume.pdf'; // Change to your preferred filename
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownloadClick}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadCV;