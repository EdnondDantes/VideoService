import Recommendation from "../../components/Recommendation";
import SearchBar from "../../components/SearchBar";
import s from './style.module.css'

const VideoGallery = () => {
   return ( 

      <div className={s.container}>

         <SearchBar />

         <Recommendation />

      </div>
   
      );
}
 
export default VideoGallery;