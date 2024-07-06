import React, { useState } from 'react';
import VideoPreview from '../../components/VideoPreview';
import { videoSrc } from '../../constants/app';
import s from './style.module.css';
import { video } from '../../constants/data';
import FileUploadButton from '../../components/FileUploadButton';

const PreviewPage = () => {
  const [capturedFrame, setCapturedFrame] = useState(null);

  const handleImageUpload = (files) => {
    const file = files[0]; // Предполагаем, что загружается только одно изображение

    if (file) {
      const url = URL.createObjectURL(file);
      setCapturedFrame(url);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s['preview-container']}>
        <p>
          Вы можете выбрать обложку,
          перемещая <span className={s.red}>
              красный ползунок
             </span>

         , либо  
          <FileUploadButton
           onFileSelect={handleImageUpload}
           accept="image/*" 
           s={s} 
           text={' загрузите обложку вручную'}
           />
        </p>

        <div className={s['preview-element']}>
          <VideoPreview style={s} videoSrc={videoSrc} capturedFrame={capturedFrame} setCapturedFrame={setCapturedFrame} />
        </div>

        <div className={s['video-access']}>

        </div>
        <div className={s['video-access-item']}></div>
        <div className={s['video-access-item']}></div>
        <div className={s['video-access-item']}></div>

        {/* Используйте FileUploadButton для загрузки изображения */}
        
      </div>

      <div className={s['video-info-container']}>
       

        <div className={s['video-block']}>
        <h1 className={s.title}>Итоговое видео будет выглядеть так:</h1>
          <div>
            {capturedFrame && (
              <img className={s['video-poster']} src={capturedFrame} alt="Poster" />
            )}
          </div>

          <div className={s['channel-info']}>
            <img className={s.avatar} src={video.avatar} alt={`Аватар ${video.channelName}`} />

            <div className={s['video-info']}>
              <h3>{video.title}</h3>
              <p>{video.channelName}</p>
              <p>{video.views} просмотров</p>
            </div>
          </div>

        </div>

         <div className={s['button-container']}>
      
              <div className={s.button} role='button'>
                  Сохранить
               </div>
      
         </div>

      </div>

      
    </div>
  );
};

export default PreviewPage;
