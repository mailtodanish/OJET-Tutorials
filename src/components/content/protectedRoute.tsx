

import { useState } from "preact/hooks";
import { Navigate, useNavigate } from "react-router-dom";
export function PrivateRoute({ children }: any) {
  const navigate = useNavigate();
  const [AuthFlag, setAuthFlag] = useState(true);
  return ( 
    <>
    {AuthFlag ? children : <Navigate to="/login" />}
    </>
  );
};