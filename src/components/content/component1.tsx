
import "ojs/ojinputtext";
import { Navigate, Route, Routes } from "react-router-dom";
import { Comp2 } from "./comp2";
import { Detail } from "./detail";
export function Comp1() {

    
    
  return ( 
  
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
        <Routes>
          <Route index element={<Navigate to={"list"} />}></Route>
          <Route path="/list" element={<Comp2 />}></Route>  
          <Route path="/detail/:id" element={<Detail />}></Route>           
        </Routes>
    </div>
  );
};
