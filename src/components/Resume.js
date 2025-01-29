import React from 'react';
import './Resume.css';
import resume from './resume.pdf';
function Resume() {
    return (
        <div className="resume-container">
            <h2>My Resume</h2>
            <p>Click below to download or view my resume:</p>
            
            {/* Display the Resume PDF */}
            <embed 
                src={resume}
                type="application/pdf" 
                width="60%" 
                height="600px" 
                title="Resume"
            />
            
            <div className="download-container">
                {/* Button to download the resume */}
                <a href={resume} download className="resume-button">
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default Resume;
