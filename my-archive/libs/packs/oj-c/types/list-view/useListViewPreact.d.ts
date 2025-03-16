import { ListViewProps } from './list-view';
export declare const useListViewPreact: <K extends string | number, D>({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, data: propData, gridlines, onCurrentItemChanged, selectionMode, selected, scrollPolicyOptions, onSelectedChanged, onOjItemAction, onOjFirstSelectedItem, reorderable, onOjReorder }: Partial<ListViewProps<K, D>>, addBusyState: (desc?: string) => () => void, isClickthroughDisabled: (target: EventTarget | null) => boolean) => {
    status: "error" | "loading" | "success";
    listViewProps: Pick<import("@oracle/oraclejet-preact/UNSAFE_ListView").Props<string | number, unknown>, "children" | "aria-label" | "aria-labelledby" | "testId" | "selectionMode" | "onSelectionChange" | "onItemAction" | "currentKey" | "onCurrentKeyChange" | "selectedKeys" | "viewportConfig" | "currentItemVariant" | "gridlines" | "promotedSection" | "scrollPositionOverride" | "onReorder"> & {
        data: unknown[] | null;
        getRowKey: (data: unknown) => string | number;
        hasMore?: boolean | undefined;
        onLoadMore?: (() => void) | undefined;
        contextMenuConfig?: import("@oracle/oraclejet-preact/UNSAFE_ListView/List.types").ListViewContextMenuConfig<string | number, unknown> | undefined;
    } & {
        ref?: import("preact/compat").ForwardedRef<import("@oracle/oraclejet-preact/UNSAFE_ListView").ListViewHandle<string | number>> | undefined;
    };
};
