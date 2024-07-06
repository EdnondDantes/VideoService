
import BurgerMenu from '../../components/BurgerMenu';
import DragAndDrop from '../../components/DragAndDrop';
import VideoGroupe from '../../components/VideoGroupe';
import { videoData } from '../../constants/data';
import s from './style.module.css'

const VideoPage = () => {
   return ( 
      <div className={s.wrapper}>

        <div className={s["videos-container"]}>
         
            <div className={s["videos-info"]}>
               <VideoGroupe  videoData={videoData} styles={s}/>
               <div className={s["status-bar"]}>
                  {videoData.map(value => (
                     
                     <div className={s["status-container"]}>
                        
                        <div className={s["status-container-item"]}>
                        
                           <p> Cтатус видео:<span> {value.id} </span></p>
                        
                           <div className={s["video-status"]}>
                              <p>{value.channelName}</p>
                           </div>
                        </div>
                        <div>
                         <BurgerMenu />
                        </div>
                        
                     </div>
                  ))}
                  
               
                
               </div>
            </div>
        </div>

        <div className={s["drag-and-drop"]}>
            <DragAndDrop />
        </div>

      </div>
    );
}
 
export default VideoPage;