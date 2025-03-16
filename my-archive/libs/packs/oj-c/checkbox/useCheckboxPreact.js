define(["require", "exports", "preact/hooks", "oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue", "oj-c/editable-value/UNSAFE_useValidators/useValidators"], function (require, exports, hooks_1, useEditableValue_1, useValidators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCheckboxPreact = void 0;
    function useCheckboxPreact({ ['aria-describedby']: ariaDescribedBy, disabled, displayOptions, messagesCustom, readonly, requiredMessageDetail, required, userAssistanceDensity, value: propValue, onMessagesCustomChanged, onValidChanged, onValueChanged, validators }, addBusyState) {
        const { methods, onCommitValue, displayValue, setDisplayValue, textFieldProps } = (0, useEditableValue_1.useEditableValue)({
            ariaDescribedBy,
            disabled,
            displayOptions,
            messagesCustom,
            readonly,
            required,
            requiredMessageDetail,
            value: propValue,
            addBusyState,
            onMessagesCustomChanged,
            onValidChanged,
            onValueChanged,
            validators
        });
        const onCommitHandler = (0, hooks_1.useCallback)(async ({ value }) => {
            const validationResult = await onCommitValue(value);
            const newValue = validationResult === useValidators_1.ValidationResult.INVALID ? false : value;
            setDisplayValue(newValue);
        }, [onCommitValue]);
        const checkboxProps = {
            'aria-describedby': textFieldProps['aria-describedby'],
            isRequired: required,
            isReadonly: readonly,
            isDisabled: disabled,
            messages: textFieldProps.messages,
            onCommit: onCommitHandler,
            userAssistanceDensity,
            value: displayValue
        };
        return {
            methods,
            checkboxProps
        };
    }
    exports.useCheckboxPreact = useCheckboxPreact;
});
