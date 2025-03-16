import { CurrentKeyDetail, SelectionDetail } from '@oracle/oraclejet-preact/UNSAFE_Collection';
import { CardViewProps } from './card-view';
export declare const useCardViewPreact: <K extends string | number, D>({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, data: propData, gutterSize, focusBehavior, onCurrentItemChanged, selected, onSelectedChanged, scrollPolicyOptions, selectionMode, initialAnimation, columns: corePackColumns, reorderable, onOjReorder }: Partial<CardViewProps<K, D>>, addBusyState: (desc?: string) => () => void, isClickthroughDisabled: (target: EventTarget | null) => boolean) => {
    status: "error" | "loading" | "success";
    cardViewProps: {
        data: unknown[] | null;
        onLoadMore?: (() => void) | undefined;
        hasMore?: boolean | undefined;
        getRowKey: (data: unknown) => string | number;
        children: (context: import("@oracle/oraclejet-preact/UNSAFE_Collection").ListItemRendererContext<string | number, unknown>) => import("preact").ComponentChildren;
        currentKey?: string | number | undefined;
        onCurrentKeyChange?: ((detail: CurrentKeyDetail<string | number>) => void) | undefined;
        selectionMode?: "none" | "multiple" | "single" | undefined;
        selectedKeys?: import("@oracle/oraclejet-preact/utils/UNSAFE_keys").Keys<string | number> | undefined;
        onSelectionChange?: ((detail: SelectionDetail<string | number>) => void) | undefined;
        viewportConfig?: import("@oracle/oraclejet-preact/hooks/UNSAFE_useViewportIntersect").ViewportConfig | undefined;
        focusBehavior?: "content" | "card" | undefined;
        'aria-label'?: string | undefined;
        'aria-labelledby'?: string | undefined;
        initialAnimation?: "slideUp" | "slideDown" | undefined;
        gutterSize?: ("xs" | "sm" | "md" | "lg" | "xl") | undefined;
    } & import("@oracle/oraclejet-preact/UNSAFE_Collection/Reorderable.types").ReorderProps<string | number> & {
        columns: number;
    };
};
