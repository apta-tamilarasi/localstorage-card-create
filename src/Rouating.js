import { BrowserRouter,Routes,Route } from "react-router-dom";

import Cardcreateform from "./Component/Cardcreateform/Cardcreateform.js";
import Homecardcreate from "./Component/Cardcreateform/Homecardcreate.js";

const Routing=()=>{
    return (
        <BrowserRouter>

        <Routes>
            <Route path='/' element={<Cardcreateform/>}></Route>
           
            <Route path='/home' element={<Homecardcreate/>}></Route>

        </Routes>
        </BrowserRouter>
    )
}

export default Routing