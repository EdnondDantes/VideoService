import React from 'react';
import styles from './style.module.css';
import VideoGroupe from '../VideoGroupe';
import { videoData } from '../../constants/data';
// import avatar2 from '../../img/avatars/avatar2.jpg';
// import avatar3 from '../../img/avatars/avatar3.jpg';



const Recommendation = () => {
  return (
  <VideoGroupe videoData={videoData} styles={styles}/>
  );
};

export default Recommendation;
