import React, { useState, useRef } from "react";
import s from "./style.module.css";
import DragAndDropIcon from "./../../img/icons/DragAndDropIcon.png";
import FileUploadButton from "../FileUploadButton";

const DragAndDrop = () => {
  const [videos, setVideos] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  const onFileSelect = (files) => {
    for (const file of files) {
      if (file.type.split("/")[0] !== "video") continue;

      const url = URL.createObjectURL(file);
      console.log("Video URL:", url);

      if (!videos.some((e) => e.name === file.name)) {
        setVideos((prevVideos) => [
          ...prevVideos,
          {
            name: file.name,
            url: url,
          },
        ]);
      }
    }
  };

  const deleteVideo = (index) => {
    setVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;

    onFileSelect(droppedFiles);

    setIsDragging(false);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={s.card}
    >
      <div className={s["text-container"]}>
        <div className="">
          <img src={DragAndDropIcon} alt="drag-and-drop" />
        </div>

        <>
          <div className="">
            Для загрузки нового видео <br />
            перетащите сюда файл или{" "}
          </div>
          <FileUploadButton onFileSelect={onFileSelect} s={s} accept="video/*" />
        </>

        <div className={s.container}>
          {videos.map((video, index) => (
            <div className={s.video} key={index}>
              <span className={s.delete} onClick={() => deleteVideo(index)}>
                &times;
              </span>
              <video controls src={video.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
