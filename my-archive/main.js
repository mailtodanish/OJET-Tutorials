/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
"use strict";

/**
 * Example of Require.js boostrap javascript
 */

(function () {
        requirejs.config({
                map: {
                        "*": {
                                react: "preact/compat",
                                "react-dom": "preact/compat",
                        },
                },
                // injector:baseUrl
                baseUrl: '.',
                // endinjector
                paths:
                        /* DO NOT MODIFY
                         ** All paths are dynamicaly generated from the path_mappings.json file.
                         ** Add any new library dependencies in path_mappings json file
                         */
// injector:mainReleasePaths

{
  "knockout":"libs/knockout/knockout-3.5.1.debug",
  "jquery":"libs/jquery/jquery-3.6.4",
  "jqueryui-amd":"libs/jquery/jqueryui-amd-1.13.2",
  "hammerjs":"libs/hammer/hammer-2.0.8",
  "ojdnd":"libs/dnd-polyfill/dnd-polyfill-1.0.2",
  "ojs":"libs/oj/17.0.4/debug",
  "ojL10n":"libs/oj/17.0.4/ojL10n",
  "ojtranslations":"libs/oj/17.0.4/resources",
  "@oracle/oraclejet-preact":"libs/oraclejet-preact/amd",
  "oj-c":"libs/packs/oj-c",
  "persist":"libs/persist/debug",
  "text":"libs/require/text",
  "signals":"libs/js-signals/signals",
  "touchr":"libs/touchr/touchr",
  "preact":"libs/preact/dist/preact.umd",
  "preact/hooks":"libs/preact/hooks/dist/hooks.umd",
  "preact/compat":"libs/preact/compat/dist/compat.umd",
  "preact/jsx-runtime":"libs/preact/jsx-runtime/dist/jsxRuntime.umd",
  "preact/debug":"libs/preact/debug/dist/debug.umd",
  "preact/devtools":"libs/preact/devtools/dist/devtools.umd",
  "proj4":"libs/proj4js/dist/proj4-src",
  "css":"libs/require-css/css",
  "ojcss":"libs/oj/17.0.4/debug/ojcss",
  "ojs/ojcss":"libs/oj/17.0.4/debug/ojcss",
  "chai":"libs/chai/chai",
  "react-router":"libs/react-router/umd/react-router",
  "react-router-dom":"libs/react-router-dom/umd/react-router-dom",
  "@remix-run/router":"libs/@remix-run/router.umd",
  "luxon":"libs/luxon/luxon.min",
  "css-builder":"libs/require-css/css-builder",
  "normalize":"libs/require-css/normalize",
  "ojs/normalize":"libs/require-css/normalize",
  "components":"components"
}

// endinjector
                
        });
})();

/**
 * Load the application's entry point file
 */
require(["./index"]);
