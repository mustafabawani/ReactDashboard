import React from 'react';


const FileInput = ({ onFileChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileChange(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileInput