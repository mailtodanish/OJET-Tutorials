
import "ojs/ojinputtext";
import { useNavigate } from "react-router-dom";
export function List() {
    const navidate = useNavigate()
  return ( 
  
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
     <h1>List</h1>
     <a onClick={() => {navidate("/settings/detail/test/?id=100")}}>GOTO Detail Page</a>
    </div>
  );
};
