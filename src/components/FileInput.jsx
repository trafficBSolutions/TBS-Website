// FileInput.js
import React, { useState } from 'react';
import '../css/FileInput.css';

const FileInput = () => {
  const [fileName, setFileName] = useState('');

  const updateFileName = (event) => {
    const fileInput = event.target;
    const fileName = fileInput.value.split('\\').pop();
    setFileName(fileName);
  };

  return (
    <div className="file-input-container">
      <label htmlFor="fileInput" className="file-label">
        {fileName}
      </label>
      <input
        type="file"
        id="file-label"
        className="fileInput"
        onChange={updateFileName}
      />
    </div>
  );
};

export default FileInput;

