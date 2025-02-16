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
import { Home } from "./content/home";
import { Profile } from "./content/profile";
import { Settings } from "./content/setting";
import { Footer } from "./footer";
import { Header } from "./header";
import Context = require("ojs/ojcontext");

type Props = Readonly<{
  appName?: string;
  userLogin?: string;
}>;

type Route = {
  path: string;
  detail?: {
    label?: string;
    iconClass?: string;
  };
};



export const App = registerCustomElement(
  "app-root",
  ({ appName = "App Name1", userLogin = "john.hancock@oracle.com" }: Props) => {
    useEffect(() => {
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    }, []);

    const routingList: Array<Route> = [
      {
        path: "home",
        detail: {
          label: "Home",
          iconClass: "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
        },
      },
      {
        path: "profile",
        detail: {
          label: "Profile",
          iconClass: "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
        },
      },
      {
        path: "settings",
        detail: {
          label: "Settings",
          iconClass: "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
        },
      },
    ];



    const pageChangeHandler = (value: string) => {
         console.error("pageChangeHandler", value);
      
      };
    return (
      <div id="appContainer" class="oj-web-applayout-page">        
        <BrowserRouter>
        <Header appName={appName} userLogin={userLogin}   allRoutes={routingList}   page="profile" onPageChanged={pageChangeHandler}/>
                <Routes>
                        <Route path="/" element={<Outlet />}>
                                <Route index element={<Home />} />
                                <Route path="home/*" element={<Home />} />
                                <Route path="profile/*" element={<Profile />} />
                                <Route path="settings/*" element={<Settings />} />
                        </Route>                        
                </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
);
