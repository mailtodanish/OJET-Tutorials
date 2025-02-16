import "ojs/ojinputtext";
import { Navigate, Route, Routes } from "react-router-dom";
import { Detail } from "./detail";
import { List } from "./list";
export function Settings() {
        return (
                <div class="oj-web-applayout-max-width oj-web-applayout-content">
                        <h1>Setting</h1>
                        <Routes>
                                <Route index element={<Navigate to={"list"} />} />
                                <Route path="list" element={<List />} />
                                <Route path="detail/:name" element={<Detail />} />
                        </Routes>
                </div>
        );
}   

