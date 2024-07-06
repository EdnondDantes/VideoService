import React, { useEffect, useRef, useState, useCallback } from "react";
import Hls from "hls.js";

const HLSVideoPlayer = ({ videoSrc, setVideoLoaded, videoRef, s }) => {
  const [currentQuality, setCurrentQuality] = useState("360p");

  const hlsRef = useRef(null);

  const onVideoLoaded = useCallback(() => {
    if (videoRef.current) {
      setVideoLoaded(true);
    }
  }, [videoRef, setVideoLoaded]);

  useEffect(() => {
    if (Hls.isSupported()) {
      hlsRef.current = new Hls();
      if (videoSrc.endsWith(".m3u8")) {
        hlsRef.current.loadSource(videoSrc);
        hlsRef.current.attachMedia(videoRef.current);

        hlsRef.current.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
          const currentLevel = hlsRef.current.levels[data.level];
          setCurrentQuality(`${currentLevel.height}p`);
        });

        hlsRef.current.on(Hls.Events.MANIFEST_PARSED, function () {
          hlsRef.current.levels.forEach(function (level, levelIndex) {
            if (level.height <= 360) {
              hlsRef.current.currentLevel = levelIndex;
              return;
            }
          });
        });

        videoRef.current.addEventListener("loadeddata", onVideoLoaded);
      } else if (videoSrc.endsWith(".mp4")) {
        videoRef.current.src = videoSrc;
        videoRef.current.addEventListener("loadeddata", onVideoLoaded);
      }
    } else if (videoSrc.endsWith(".mp4")) {
      videoRef.current.src = videoSrc;
      videoRef.current.addEventListener("loadeddata", onVideoLoaded);
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoSrc, onVideoLoaded, videoRef]);

  return (
    <video
      ref={videoRef}
      className={s.video}
    ></video>
  );
};

export default HLSVideoPlayer;
