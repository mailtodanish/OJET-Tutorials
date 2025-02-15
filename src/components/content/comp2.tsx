
import "ojs/ojinputtext";
import { useNavigate } from "react-router-dom";
export function Comp2() {
  const navigate = useNavigate();
  return ( 
   
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
     <a onClick={()=>navigate('/contact/detail/11/?id=1&name=danish')}>gotoDetail</a>
    </div>
  );
};
