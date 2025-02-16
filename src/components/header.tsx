/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojbutton";
import "ojs/ojmenu";
import "ojs/ojnavigationlist";
import { ojNavigationList } from "ojs/ojnavigationlist";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import "ojs/ojtoolbar";
import { useEffect, useRef, useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";


type Route = {
  path: string;
  detail?: {
    label?: string;
    iconClass?: string;
  };
}
type Props = Readonly<{
  appName: string;
  userLogin: string;
  allRoutes: Array<Route>;
  page?: string;
  onPageChanged: (page: string) => void;
 }>;


export function Header({ appName, userLogin,  allRoutes, page, onPageChanged}: Props) {
  const mediaQueryRef = useRef<MediaQueryList>(window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")!));

  const [isSmallWidth, setIsSmallWidth] = useState(mediaQueryRef.current.matches);

  const routesADP = new ArrayDataProvider(allRoutes, { keyAttributes: "path" });

  useEffect(() => {
    mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
    return () => mediaQueryRef.current.removeEventListener("change", handleMediaQueryChange);
  }, [mediaQueryRef]);

  function handleMediaQueryChange(e: MediaQueryListEvent) {
    setIsSmallWidth(e.matches);
  }

  function getDisplayType() {
    return isSmallWidth ? "icons" : "all";
  }

  const renderNavList = (item: ojNavigationList.ItemContext<string, Route>) => {
   
    return (
      <li id={item.data.path}>
        <a href="#">
          <span class={item.data.detail.iconClass} />
          {getDisplayType() === "all" ? item.data.detail.label : ""}
        </a>
      </li>
    );
  };

  function getEndIconClass() {
    return isSmallWidth ? "oj-icon demo-appheader-avatar" : "oj-component-icon oj-button-menu-dropdown-icon";
  }
  const navigate = useNavigate();

  const pageChangeHandler = (
    event: ojNavigationList.selectionChanged<Route["path"], Route>
  ) => {
    if (event.detail.updatedFrom === "internal")
      navigate(event.detail.value);
      onPageChanged(event.detail.value);
  };

  return (
    <header role="banner" class="oj-web-applayout-header">
      <div class="oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center">
        <div class="oj-flex-bar-middle oj-sm-align-items-baseline">
          <span role="img" class="oj-icon demo-oracle-icon" title="Oracle Logo" alt="Oracle Logo"></span>
          <h1 class="oj-sm-only-hide oj-web-applayout-header-title" title="Application Name">
            {appName}
          </h1>
        </div>
        <div class="oj-flex-bar-end">
          <oj-navigation-list edge="top" data={routesADP} selection={page} onselectionChanged={pageChangeHandler}>
          <template slot="itemTemplate" render={renderNavList} >
          </template>
          </oj-navigation-list>
          
          <oj-toolbar>
            <oj-menu-button id="userMenu" display={getDisplayType()} chroming="borderless">
              <span>{userLogin}</span>
              <span slot="endIcon" class={getEndIconClass()}></span>
              <oj-menu id="menu1" slot="menu">
                <oj-option id="pref" value="pref">
                  Preferences
                </oj-option>
                <oj-option id="help" value="help">
                  Help
                </oj-option>
                <oj-option id="about" value="about">
                  About
                </oj-option>
                <oj-option id="out" value="out">
                  Sign Out
                </oj-option>
              </oj-menu>
            </oj-menu-button>
          </oj-toolbar>
        </div>
      </div>
    </header>
  );
}
