type Props = {
    links?: FooterLink[];
};
type FooterLink = {
    name: string;
    linkId: string;
    linkTarget: string;
};
export declare function Footer({ links }: Props): import("preact").JSX.Element;
export {};
