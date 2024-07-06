import PersonVideo from "../containers/PersonVideo";
import PreviewPage from "../containers/PreviewPage";
import VideoGallery from "../containers/VideoGallery";
import VideoPage from "../containers/VideoPage";

const routesConfig = [
   {
       path: '/',
       element: <VideoGallery />
   },
   {
       path: '/videos',
       element: <VideoPage />
   },
   {
       path: '/1',
       element: <PersonVideo />
   },
   {
       path: '/3',
       element: <PreviewPage />
    },


   // {
   //     path: '/not-found',
   //     exact: true,
   //     component: NotFoundPage
   // },
   // {
   //     path: '*',
   //     exact: false,
   //     component: NotFoundPage
   // }
];

export default routesConfig;
