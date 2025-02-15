
import "ojs/ojinputtext";
import { useNavigate } from "react-router-dom";
export function Content() {
  const navigate = useNavigate();
  return ( 
   
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
     <a onClick={()=>navigate('contact')}>Test1</a>
    </div>
  );
};
