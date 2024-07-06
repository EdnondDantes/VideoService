import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import Hls from 'hls.js';

import styles from './style.module.css';
import 'plyr/dist/plyr.css';
import { video } from '../../constants/data';
import './plyr.css';
import { videoSrc } from '../../constants/app';

const VideoPlayer = ({ s }) => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  let player; 

  useEffect(() => {
    const source = videoSrc;

    const defaultOptions = {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
    };

    if (!Hls.isSupported()) {
      videoRef.current.src = source;
      player = new Plyr(videoRef.current, defaultOptions);
    } else {
      const hls = new Hls();
      hls.loadSource(source);

      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        const availableQualities = hls.levels.map(l => l.height);
        availableQualities.unshift('auto');

        defaultOptions.quality = {
          default: 'auto',
          options: availableQualities,
          forced: true,
          onChange: e => updateQuality(e),
        };

        player = new Plyr(videoRef.current, defaultOptions);
      });

      hls.attachMedia(videoRef.current);
      window.hls = hls;
    }

    const updateQuality = newQuality => {
      player.quality = newQuality;
    };
  }, []);

  
  const videoContainerStyles = {
    width: '850px',
    borderRadius: '15px',
    overflow: 'hidden', 
  };


  return (
    <div className={styles['video-block']}>
      <div className={s['main-player ']}>
        <div ref={videoContainerRef} style={videoContainerStyles}>
          <video
            controls
            ref={videoRef}
          />
        </div>
      </div>
      <div className={styles['channel-info']}>
        <img
          className={styles.avatar}
          src={video.avatar}
          alt={`Аватар ${video.channelName}`}
        />
        <div className={styles['video-info']}>
          <h3>{video.title}</h3>
          <p>{video.channelName}</p>
          <p>{video.views} просмотров</p>
          <span className={styles.duration}>{video.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
