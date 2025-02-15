/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { registerCustomElement } from "ojs/ojvcomponent";
import { useEffect } from "preact/hooks";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Comp1 } from "./content/component1";
import { Content } from "./content/index";
import { PrivateRoute } from "./content/protectedRoute";
import { Footer } from "./footer";
import { Header } from "./header";
import Context = require("ojs/ojcontext");
type Props = Readonly<{
        appName?: string;
        userLogin?: string;
}>;

const r = (
        <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Outlet />}>
                                <Route index element={<PrivateRoute children={<Content />} />} />
                                <Route path="contact/*" element={<Comp1 />} />
                        </Route>
                        <Route path="login" element={<div>Not Found</div>} />
                </Routes>
        </BrowserRouter>
);

export const App = registerCustomElement("app-root", ({ appName = "App Name1", userLogin = "john.hancock@oracle.com" }: Props) => {
        useEffect(() => {
                Context.getPageContext().getBusyContext().applicationBootstrapComplete();
        }, []);

        return (
                <div id="appContainer" class="oj-web-applayout-page">
                        <Header appName={appName} userLogin={userLogin} />
                        {r}
                        <Footer />
                </div>
        );
});
