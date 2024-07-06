import { NavLink } from "react-router-dom";

const VideoGroupe = ({videoData, styles}) => {
   return ( 

    <div className={styles.container}>

      <div className={styles['video-blocks']}>

        {videoData.map((video, index) => (

            <div className={styles['video-block']} key={index}>
  
              <NavLink exact to={`/${video.id}`} >
                <img className={styles['video-poster']} src={video.poster} alt={`Постер ${video.title}`} />
              </NavLink>
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


        ))}

      </div>

    </div>
    
    );
}
 
export default VideoGroupe;