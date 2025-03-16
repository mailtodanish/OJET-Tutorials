
import "ojs/ojinputtext";
import { useLocation, useParams } from "react-router-dom";
export function Detail() {
    const location = useLocation();
    const queryPrameter = new URLSearchParams(location.search);
    const {name} = useParams();
  return ( 
  
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
     <h1>Detail</h1>
     <p>id: {queryPrameter.get("id")}</p>
     <p>name: {name}</p>
    </div>
  );
};
