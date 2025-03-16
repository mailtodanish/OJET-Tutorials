import type { InputDatePickerProps, InputDatePickerRef } from './input-date-picker';
export declare const useInputDatePicker: (props: InputDatePickerProps, ref: InputDatePickerRef) => {
    formContextValue: import("@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext").FormContextProps;
    inputDatePickerProps: import("preact/compat").PropsWithoutRef<{
        variant?: "default" | "embedded" | undefined;
        columnSpan?: import("@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout").LayoutColumns | undefined;
        textAlign?: "end" | "start" | "right" | undefined;
        label: string;
        'aria-describedby'?: string | undefined;
        testId?: string | undefined;
        isDisabled?: boolean | undefined;
        messages?: import("@oracle/oraclejet-preact/UNSAFE_ComponentMessage").ComponentMessageItem[] | undefined;
        assistiveText?: string | undefined;
        helpSourceLink?: string | undefined;
        helpSourceText?: string | undefined;
        isRequiredShown?: boolean | undefined;
        userAssistanceDensity?: import("@oracle/oraclejet-preact/UNSAFE_UserAssistance").UserAssistanceDensityType | undefined;
        labelEdge?: "none" | "start" | "top" | "inside" | undefined;
        isReadonly?: boolean | undefined;
        isRequired?: boolean | undefined;
        labelStartWidth?: import("@oracle/oraclejet-preact/utils/UNSAFE_size").Size | undefined;
    } & {
        max?: Required<import("@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils").CalendarDate> | undefined;
        min?: Required<import("@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils").CalendarDate> | undefined;
        dayFormatter?: ((date: Required<import("@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils").CalendarDate>) => import("@oracle/oraclejet-preact/UNSAFE_DatePicker").DayFormatOptions) | undefined;
        daysOutsideMonth?: "hidden" | "selectable" | undefined;
        monthAndYearPicker?: "off" | "on" | undefined;
        todayTimeZone?: string | undefined;
        todayButton?: "hidden" | "visible" | undefined;
    } & {
        masks?: import("@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils").CalendarDatePlaceholders | undefined;
        value?: import("@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils").CalendarDate | undefined;
        onCommit?: ((detail: import("@oracle/oraclejet-preact/utils/UNSAFE_valueUpdateDetail").ValueUpdateDetail<import("@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils").CalendarDate>) => void) | undefined;
        onInput: (detail: import("@oracle/oraclejet-preact/utils/UNSAFE_valueUpdateDetail").ValueUpdateDetail<import("@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils").CalendarDate>) => void;
    }> & {
        ref?: import("preact").Ref<import("@oracle/oraclejet-preact/hooks/UNSAFE_useFocusableTextField").FocusableHandle> | undefined;
    };
    rootProps: Readonly<Pick<import("@oracle/oraclejet-preact/utils/UNSAFE_attributeUtils").ExcludeSignalLike<import("preact").JSX.HTMLAttributes<EventTarget>>, "id" | "translate" | "hidden" | "slot" | "style" | "title" | "dir" | "accessKey" | "autocapitalize" | "draggable" | "lang" | "spellcheck" | "role" | "contentEditable" | "inputMode" | "autofocus" | "tabIndex" | "class" | "accesskey" | "autoFocus" | "contenteditable" | "enterkeyhint" | "inputmode" | "spellCheck" | "tabindex" | "autoCapitalize" | "aria-label" | "aria-labelledby" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | ("onFocus" | "onFocusCapture" | "onFocusIn" | "onFocusInCapture" | "onFocusOut" | "onFocusOutCapture" | "onBlur" | "onBlurCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDblClick" | "onDblClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseEnterCapture" | "onMouseLeave" | "onMouseLeaveCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerOut" | "onPointerOutCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onWheel" | "onWheelCapture")> & {
        enterKeyHint?: "search" | "next" | "done" | "enter" | "go" | "previous" | "send" | undefined;
        onfocusin?: import("preact").JSX.FocusEventHandler<EventTarget> | undefined;
        onfocusinCapture?: import("preact").JSX.FocusEventHandler<EventTarget> | undefined;
        onfocusout?: import("preact").JSX.FocusEventHandler<EventTarget> | undefined;
        onfocusoutCapture?: import("preact").JSX.FocusEventHandler<EventTarget> | undefined;
    }>;
};
