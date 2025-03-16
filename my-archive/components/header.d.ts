import "ojs/ojbutton";
import "ojs/ojmenu";
import "ojs/ojnavigationlist";
import "ojs/ojoption";
import "ojs/ojtoolbar";
type Route = {
    path: string;
    detail?: {
        label?: string;
        iconClass?: string;
    };
};
type Props = Readonly<{
    appName: string;
    userLogin: string;
    allRoutes: Array<Route>;
    page?: string;
    onPageChanged: (page: string) => void;
}>;
export declare function Header({ appName, userLogin, allRoutes, page, onPageChanged }: Props): import("preact").JSX.Element;
export {};
