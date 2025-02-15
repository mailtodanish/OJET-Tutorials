
import { useLocation, useParams } from "react-router-dom";
export function Detail() {
    const location = useLocation();
    console.log("Detail useLocation",location);
    const queryParams = new URLSearchParams(location.search);
    console.log("Detail queryParams",queryParams);
    // const id: any = queryParams.get("id");
    // console.log("Detail id",id);
    const name: any = queryParams.get("name");
    console.log("Detail Name",name);
    const {id} = useParams()
    console.log("Detail useParams",id);
  return ( 
   
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
     <h1>Detail:{id}{name}</h1>
    </div>
  );
};

   