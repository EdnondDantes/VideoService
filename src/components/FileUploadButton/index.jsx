import React, { useRef } from "react";

const FileUploadButton = ({ onFileSelect, s, accept, text }) => {
  const fileInputRef = useRef(null);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onInputChange = (event) => {
    const files = event.target.files;
    onFileSelect(files);
  };

  return (
    <>
      <input
        type="file"
        name="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={onInputChange}
        multiple
        accept={accept}
      />
      <span className={s.select} role="button" onClick={selectFiles}>
        {text || 'Загрузите файл' }
      </span>
    </>
  );
};

export default FileUploadButton;
