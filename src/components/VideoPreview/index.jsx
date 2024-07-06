import React, { useState, useRef, useEffect } from "react";
import s from "./style.module.css";
import HLSVideoPlayer from "./../HLSVideoPlayer";

const VideoPreview = ({ videoSrc, setCapturedFrame, capturedFrame, style }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentQuality, setCurrentQuality] = useState("360p");
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef(null);
  const rangeInputRef = useRef(null);

  const canvasPreview = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      setCapturedFrame(canvas.toDataURL("image/jpeg"));
    }
  };

  function play() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  const rangeChange = (event) => {
    if (videoRef.current) {
      const newTime = parseFloat(event.target.value);
      setCurrentTime(newTime);
      videoRef.current.currentTime = newTime;
    }
  };

  const handleMouseMove = (e) => {
    if (videoLoaded && videoRef.current) {
      const boundingBox = rangeInputRef.current.getBoundingClientRect();
      const percentage = (e.clientX - boundingBox.left) / boundingBox.width;
      const newTime = Math.min(
        Math.max(0, percentage * videoRef.current.duration),
        videoRef.current.duration
      );

      setCurrentTime(newTime);
      videoRef.current.currentTime = newTime;
    }
  };

  // const showQuality = () => {
  //   console.log(`Текущее качество: ${currentQuality}`);
  // };

  useEffect(() => {

    if (videoRef.current) {

      videoRef.current.addEventListener("loadeddata", () => {
        canvasPreview();
      });

    }

  }, []);

  return (
    <div className={s.container}>

      <div className={s['video-container']} style={{ position: 'relative' }}>

        <HLSVideoPlayer
          s={s}
          videoSrc={videoSrc}
          setVideoLoaded={setVideoLoaded}
          videoRef={videoRef}
        />

        <input
          type="range"
          ref={rangeInputRef}
          min="0"
          max={videoRef.current ? videoRef.current.duration : 0}
          step="0.1"
          value={currentTime}
          onChange={rangeChange}
          onMouseMove={handleMouseMove}
          onClick={canvasPreview}
          className={s['range-input']}
        />
      </div>
      <div>
        {/* <div className="button-container">
          <button onClick={play}>Плей</button>
          <button onClick={canvasPreview}>Захватить кадр</button>
          <button onClick={showQuality}>Показать качество</button>
        </div> */}
        {/* {capturedFrame && <img src={capturedFrame} alt="Captured Frame" />} */}
      </div>
    </div>
  );
};

export default VideoPreview;
