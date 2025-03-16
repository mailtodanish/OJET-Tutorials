import { DataProvider } from 'ojs/ojdataprovider';
type Props<K, D> = {
    dataProvider?: DataProvider<K, D>;
    addBusyState: (description: string) => () => void;
};
export declare function useVisData<K, D>({ addBusyState, dataProvider }: Props<K, D>): {
    data: import("@oracle/oraclejet/ojcommontypes").ItemContext<K, D>[];
    isLoading: boolean;
};
export {};
