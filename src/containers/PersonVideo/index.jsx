import VideoGroupe from '../../components/VideoGroupe';
import VideoPlayer from '../../components/VideoPlayer';
import { videoData } from '../../constants/data';
import s from './style.module.css'

const PersonVideo = () => {
   return ( 
   <div className={s.wrapper}>
<div className={s['video-container']}>
         <VideoPlayer s={s}/>
</div>

<div className={s['recommendation-container']}>
     <VideoGroupe videoData={videoData}  styles={s} />
</div>



   </div> );
}
 
export default PersonVideo;