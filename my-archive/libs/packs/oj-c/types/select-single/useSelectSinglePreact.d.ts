import { ValueUpdateDetail } from '@oracle/oraclejet-preact/utils/UNSAFE_valueUpdateDetail';
import type { SelectSingleProps } from './select-single';
export declare function useSelectSinglePreact<V extends string | number, D extends Record<string, any>>({ advancedSearch, data: propData, disabled, displayOptions, itemTemplate, itemText, labelEdge, labelHint, labelStartWidth, matchBy: propMatchBy, messagesCustom, placeholder, readonly, requiredMessageDetail: propRequiredMessageDetail, required, textAlign, userAssistanceDensity, value: propValue, valueItem: propValueItem, virtualKeyboard, onMessagesCustomChanged, onOjAdvancedSearchAction, onOjValueAction, onValidChanged, onValueChanged, onValueItemChanged, ...otherProps }: SelectSingleProps<V, D>, addBusyState: (desc?: string) => () => void): {
    methods: {
        reset: () => void;
        validate: () => Promise<"invalid" | "valid">;
        showMessages: () => void;
    };
    selectSingleProps: import("preact/compat").PropsWithoutRef<import("@oracle/oraclejet-preact/hooks/UNSAFE_useTestId").TestIdProps & {
        addToList?: "off" | "on" | undefined;
        advancedSearch?: "off" | "on" | undefined;
        'aria-describedby'?: string | undefined;
        assistiveText?: string | undefined;
        columnSpan?: import("@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout").LayoutColumns | undefined;
        data?: import("@oracle/oraclejet-preact/UNSAFE_Collection").DataState<string | number, Record<string, any>> | null | undefined;
        helpSourceLink?: string | undefined;
        helpSourceText?: string | undefined;
        isDisabled?: boolean | undefined;
        isLoading?: boolean | undefined;
        isReadonly?: boolean | undefined;
        isRequired?: boolean | undefined;
        isRequiredShown?: boolean | undefined;
        itemRenderer?: ((itemRendererProps: {
            index: number;
            data: Record<string, any>;
        } & {
            metadata: {
                key: string | number;
                suggestion?: Record<string, any> | undefined;
            };
            searchText?: string | undefined;
            selectedKeys?: Set<string | number> | undefined;
            onSelectionChange: (detail: {
                value: Set<string | number>;
                target: EventTarget | null;
            }) => void;
        }) => import("preact").ComponentChildren) | undefined;
        itemText: import("@oracle/oraclejet-preact/utils/UNSAFE_selectUtils").ItemTextType<string | number, Record<string, any>>;
        label: string;
        labelEdge?: "none" | "start" | "top" | "inside" | undefined;
        labelStartWidth?: import("@oracle/oraclejet-preact/utils/UNSAFE_size").Size | undefined;
        messages?: import("@oracle/oraclejet-preact/UNSAFE_ComponentMessage").ComponentMessageItem[] | undefined;
        placeholder?: string | undefined;
        textAlign?: "end" | "start" | "right" | undefined;
        userAssistanceDensity?: import("@oracle/oraclejet-preact/UNSAFE_UserAssistance").UserAssistanceDensityType | undefined;
        valueItem?: import("@oracle/oraclejet-preact/utils/UNSAFE_dataProvider").Item<string | number, Record<string, any>> | undefined;
        variant?: "default" | "embedded" | undefined;
        virtualKeyboard?: "number" | "search" | "auto" | "url" | "text" | "email" | "tel" | undefined;
        onAddToListAction?: (({ searchText }: {
            searchText?: string | undefined;
        }) => void) | undefined;
        onAdvancedSearchAction?: (({ searchText }: {
            searchText?: string | undefined;
        }) => void) | undefined;
        onCommit: (detail: ValueUpdateDetail<string | number>) => void;
        onFilter?: (({ searchText }: {
            searchText?: string | undefined;
        }) => void) | undefined;
        onLoadRange?: ((range: import("@oracle/oraclejet-preact/UNSAFE_Collection").Range) => void) | undefined;
    }> & {
        ref?: import("preact").Ref<import("@oracle/oraclejet-preact/hooks/UNSAFE_useFocusableTextField").FocusableHandle> | undefined;
    };
    _doAdvancedSearchAction: (searchText: string) => void;
    _selectItemByValue: (value: V | null) => Promise<void>;
};
