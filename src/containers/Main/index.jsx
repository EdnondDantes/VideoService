// import Header from "../Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import s from './style.module.css'
import routesConfig from "../../routes/reoutesConfig";

const Main = () => {
   return ( 

   <BrowserRouter>

      <div className={s.container}>

         <Header />

         {/* <Switch > */}
             <Routes>
                {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                        
                    />
                ))}
            </Routes>
         {/* </Switch> */}

      </div>
      
   </BrowserRouter>

    );
}
 
export default Main;