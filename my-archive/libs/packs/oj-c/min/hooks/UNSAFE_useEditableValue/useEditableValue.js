define(["require", "exports", "preact/hooks", "./converterUtils", "./utils", "oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity", "./reducer", "./validationUtils"], function (require, exports, hooks_1, converterUtils_1, utils_1, useStaleIdentity_1, reducer_1, validationUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useEditableValue = void 0;
    const ConverterErrorSymbol = Symbol('ConverterError');
    function useEditableValue({ addBusyState, ariaDescribedBy, converter, defaultDisplayValue, deferredValidators, disabled, displayOptions, messagesCustom, onMessagesCustomChanged, onRawValueChanged, onValidChanged, onValueChanged, readonly, validators, value }) {
        const initialRender = (0, hooks_1.useRef)(true);
        const { setStaleIdentity } = (0, useStaleIdentity_1.useStaleIdentity)();
        const [state, dispatch] = (0, hooks_1.useReducer)((reducer_1.reducer), {
            shownMessages: [],
            hiddenMessages: [],
            customMessages: messagesCustom,
            componentMessages: [],
            value: value,
            valid: 'pending'
        }, (args) => {
            const conversion = converter
                ? (0, converterUtils_1.format)(value, defaultDisplayValue, converter)
                : { result: 'success', value: (0, utils_1.treatNull)(value, defaultDisplayValue) };
            return {
                ...args,
                displayValue: conversion.result === 'success' ? conversion.value : defaultDisplayValue
            };
        });
        const _dispatch = (0, hooks_1.useCallback)((updateFn, payload) => {
            updateFn(dispatch, payload, {
                onMessagesCustomChanged,
                onRawValueChanged,
                onValidChanged,
                onValueChanged
            });
            return true;
        }, [dispatch, onMessagesCustomChanged, onRawValueChanged, onValidChanged, onValueChanged]);
        const refreshDisplayValue = (0, hooks_1.useCallback)((value) => {
            let newDisplayValue;
            if (!converter) {
                newDisplayValue = (0, utils_1.treatNull)(value, defaultDisplayValue);
            }
            else {
                const conversion = (0, converterUtils_1.format)(value, defaultDisplayValue, converter);
                if (conversion.result === 'failure') {
                    _dispatch(reducer_1.updateComponentMessages, [conversion.error]);
                    _dispatch(reducer_1.updateValidStatus, 'invalidShown');
                    newDisplayValue = (0, utils_1.treatNull)(value, defaultDisplayValue);
                }
                else {
                    newDisplayValue = conversion.value;
                }
            }
            _dispatch(reducer_1.updateDisplayValue, newDisplayValue);
            return true;
        }, [converter, _dispatch, defaultDisplayValue]);
        const getValueForValidation = (0, hooks_1.useCallback)(() => {
            if (state.valid !== 'invalidShown') {
                return state.value;
            }
            if (!converter) {
                return (0, utils_1.normalizeValue)(state.displayValue);
            }
            const conversion = (0, converterUtils_1.parse)((0, utils_1.normalizeValue)(state.displayValue), converter);
            if (conversion.result === 'failure') {
                _dispatch(reducer_1.updateComponentMessages, [conversion.error]);
                _dispatch(reducer_1.updateValidStatus, 'invalidShown');
                return ConverterErrorSymbol;
            }
            return conversion.value;
        }, [converter, _dispatch, state.displayValue, state.valid, state.value]);
        const normalizeAndParseValue = (0, hooks_1.useCallback)((value) => {
            if (!converter) {
                return (0, utils_1.normalizeValue)(value);
            }
            const conversion = (0, converterUtils_1.parse)((0, utils_1.normalizeValue)(value), converter);
            conversion.result === 'failure' &&
                _dispatch(reducer_1.updateComponentMessages, [conversion.error]) &&
                _dispatch(reducer_1.updateValidStatus, 'invalidShown');
            return conversion.result === 'success' ? conversion.value : ConverterErrorSymbol;
        }, [converter, _dispatch]);
        const fullValidate = (0, hooks_1.useCallback)(async (value, options = {}) => {
            const { doNotClearMessagesCustom = false } = options;
            const hasCustomErrorMessages = doNotClearMessagesCustom && (0, utils_1.hasErrorMessages)(messagesCustom);
            _dispatch(reducer_1.updateValidStatus, 'pending');
            if (doNotClearMessagesCustom) {
                _dispatch(reducer_1.updateComponentMessages, []);
                _dispatch(reducer_1.updateHiddenMessages, []);
            }
            else {
                _dispatch(reducer_1.clearAllMessages);
            }
            if ((!validators || validators.length === 0) &&
                (!deferredValidators || deferredValidators.length === 0)) {
                _dispatch(reducer_1.updateValidStatus, hasCustomErrorMessages ? 'invalidShown' : 'valid');
                return true;
            }
            const errors = [];
            const deferredValidate = (0, validationUtils_1.validateSync)({ validators: deferredValidators ?? [], value });
            deferredValidate.result === 'failure' && errors.push(...deferredValidate.errors);
            let nonDeferredValidate = undefined;
            if (value !== null && value !== undefined) {
                nonDeferredValidate = (0, validationUtils_1.validateAsync)({ validators: validators ?? [], value });
            }
            errors.push(...(nonDeferredValidate?.errors ?? []));
            const maybeErrorPromises = nonDeferredValidate?.maybeErrorPromises ?? [];
            if (!errors.length && !maybeErrorPromises.length) {
                _dispatch(reducer_1.updateValidStatus, hasCustomErrorMessages ? 'invalidShown' : 'valid');
                return true;
            }
            const hasSyncError = errors.length !== 0;
            hasSyncError &&
                _dispatch(reducer_1.updateComponentMessages, errors) &&
                _dispatch(reducer_1.updateValidStatus, 'invalidShown');
            if (!maybeErrorPromises.length) {
                return !hasSyncError;
            }
            const resolver = addBusyState?.('running asynchronous validation');
            const { isStale } = setStaleIdentity('useEditableValue-full-validate');
            let hasAsyncError = false;
            const asyncValidations = [];
            for (const maybeErrorPromise of maybeErrorPromises) {
                const asyncValidation = maybeErrorPromise.then((maybeValidationError) => {
                    if (maybeValidationError && !isStale()) {
                        _dispatch(reducer_1.addComponentMessage, maybeValidationError);
                        _dispatch(reducer_1.updateValidStatus, 'invalidShown');
                        hasAsyncError = true;
                    }
                });
                asyncValidations.push(asyncValidation);
            }
            await Promise.all(asyncValidations);
            if (!hasSyncError && !hasAsyncError && !isStale()) {
                _dispatch(reducer_1.updateValidStatus, hasCustomErrorMessages ? 'invalidShown' : 'valid');
            }
            resolver?.();
            return !hasSyncError && !hasAsyncError;
        }, [addBusyState, _dispatch, deferredValidators, messagesCustom, setStaleIdentity, validators]);
        const runFullValidationAndUpdateValue = async () => {
            if (disabled || readonly)
                return;
            const parsedValueOrSymbol = getValueForValidation();
            if (parsedValueOrSymbol === ConverterErrorSymbol)
                return;
            const newValue = parsedValueOrSymbol;
            const validated = await validateValueOnInternalChange(newValue, {
                doNotClearMessagesCustom: true
            });
            validated && _dispatch(reducer_1.updateValue, newValue) && refreshDisplayValue(newValue);
        };
        const validateValueOnInternalChange = (0, hooks_1.useCallback)(async (value, options = {}) => {
            const { isStale } = setStaleIdentity('useEditableValue-validateValueOnInternalChange');
            const resolver = addBusyState?.('Running validateValueOnInternalChange');
            const validationResult = await fullValidate(value, options);
            resolver?.();
            if (isStale()) {
                return false;
            }
            return validationResult;
        }, [addBusyState, fullValidate, setStaleIdentity]);
        const onCommit = (0, hooks_1.useCallback)(async ({ value }) => {
            const parsedValueOrSymbol = normalizeAndParseValue(value);
            if (parsedValueOrSymbol === ConverterErrorSymbol) {
                return;
            }
            const parsedValue = parsedValueOrSymbol;
            const validated = await validateValueOnInternalChange(parsedValue);
            validated && _dispatch(reducer_1.updateValue, parsedValue) && refreshDisplayValue(parsedValue);
        }, [_dispatch, normalizeAndParseValue, refreshDisplayValue, validateValueOnInternalChange]);
        const onInput = (0, hooks_1.useCallback)(({ value }) => {
            _dispatch(reducer_1.updateDisplayValue, value ?? defaultDisplayValue);
        }, [_dispatch, defaultDisplayValue]);
        const validate = (0, hooks_1.useCallback)(async () => {
            if (readonly || disabled) {
                return 'valid';
            }
            const newValueOrSymbol = normalizeAndParseValue(state.displayValue);
            if (newValueOrSymbol === ConverterErrorSymbol) {
                return 'invalid';
            }
            const newValue = newValueOrSymbol;
            const resolver = addBusyState?.('Running component method validate');
            const validated = await fullValidate(newValue);
            resolver?.();
            if (validated) {
                if (newValue !== state.value) {
                    _dispatch(reducer_1.updateValue, newValue);
                    refreshDisplayValue(newValue);
                }
                return 'valid';
            }
            return 'invalid';
        }, [
            addBusyState,
            disabled,
            _dispatch,
            fullValidate,
            normalizeAndParseValue,
            readonly,
            refreshDisplayValue,
            state.displayValue,
            state.value
        ]);
        const reset = (0, hooks_1.useCallback)(() => {
            _dispatch(reducer_1.clearAllMessages);
            const valueToValidate = state.value;
            const validated = (0, validationUtils_1.validateSync)({
                validators: deferredValidators ?? [],
                value: valueToValidate
            });
            validated.result === 'failure' && _dispatch(reducer_1.updateHiddenMessages, validated.errors);
            _dispatch(reducer_1.updateValidStatus, validated.result === 'failure' ? 'invalidHidden' : 'valid');
            refreshDisplayValue(state.value);
        }, [deferredValidators, _dispatch, refreshDisplayValue, state.value]);
        const showMessages = (0, hooks_1.useCallback)(() => {
            if (state.hiddenMessages && state.hiddenMessages.length > 0) {
                _dispatch(reducer_1.showHiddenMessages);
                _dispatch(reducer_1.updateValidStatus, 'invalidShown');
            }
        }, [_dispatch, state.hiddenMessages]);
        if (!initialRender.current && state.previousValue !== value) {
            _dispatch(reducer_1.updatePreviousValue, value);
            if (value !== state.value) {
                _dispatch(reducer_1.clearAllMessages);
                const validated = (0, validationUtils_1.validateSync)({ validators: deferredValidators ?? [], value });
                validated.result === 'success' && _dispatch(reducer_1.updateValidStatus, 'valid');
                validated.result === 'failure' &&
                    _dispatch(reducer_1.updateValidStatus, 'invalidHidden') &&
                    _dispatch(reducer_1.updateHiddenMessages, validated.errors);
                _dispatch(reducer_1.updateValue, value);
                refreshDisplayValue(value);
            }
        }
        if (!initialRender.current && state.previousConverter !== converter) {
            _dispatch(reducer_1.updatePreviousConverter, converter);
            state.valid !== 'invalidShown' && refreshDisplayValue(value);
            state.valid === 'invalidShown' && runFullValidationAndUpdateValue();
        }
        if (!initialRender.current && state.previousValidators !== validators) {
            _dispatch(reducer_1.updatePreviousValidators, validators);
            state.valid === 'invalidShown' && runFullValidationAndUpdateValue();
        }
        if (!initialRender.current &&
            ((!state.customMessages && messagesCustom) ||
                (state.customMessages && !messagesCustom) ||
                (state.customMessages &&
                    messagesCustom &&
                    !(0, utils_1.isShallowEqual)(state.customMessages, messagesCustom)))) {
            const compMsgs = state.componentMessages ?? [];
            const hiddenMsgs = state.hiddenMessages ?? [];
            const customMsgs = messagesCustom ?? [];
            const hasErrors = (0, utils_1.hasErrorMessages)(customMsgs);
            const hasHiddenMessages = hiddenMsgs.length > 0;
            const hasNoMessages = compMsgs.length === 0 && hiddenMsgs.length === 0 && customMsgs.length === 0;
            _dispatch(reducer_1.updateCustomMessages, customMsgs);
            hasErrors && _dispatch(reducer_1.updateValidStatus, 'invalidShown');
            !hasErrors &&
                state.valid !== 'pending' &&
                ((hasNoMessages && _dispatch(reducer_1.updateValidStatus, 'valid')) ||
                    (hasHiddenMessages && _dispatch(reducer_1.updateValidStatus, 'invalidHidden')));
        }
        if (!initialRender.current &&
            (state.previousDeferredValidators !== deferredValidators ||
                state.previousDisabled !== disabled ||
                state.previousReadonly !== readonly)) {
            const isRequiredToggledToFalse = deferredValidators?.length === 0;
            state.previousDeferredValidators !== deferredValidators &&
                _dispatch(reducer_1.updatePreviousDeferredValidators, deferredValidators);
            state.previousDisabled !== disabled && _dispatch(reducer_1.updatePreviousDisabled, disabled);
            state.previousReadonly !== readonly && _dispatch(reducer_1.updatePreviousReadonly, readonly);
            if (isRequiredToggledToFalse || (!readonly && !disabled)) {
                switch (state.valid) {
                    case 'valid':
                        const newValue = getValueForValidation();
                        if (newValue !== ConverterErrorSymbol) {
                            const deferredValidate = (0, validationUtils_1.validateSync)({
                                validators: deferredValidators ?? [],
                                value: newValue
                            });
                            deferredValidate.result === 'failure' &&
                                _dispatch(reducer_1.updateHiddenMessages, deferredValidate.errors) &&
                                _dispatch(reducer_1.updateValidStatus, 'invalidHidden');
                        }
                        break;
                    case 'invalidHidden':
                        if (deferredValidators?.length === 0) {
                            _dispatch(reducer_1.updateValidStatus, 'valid');
                            _dispatch(reducer_1.updateHiddenMessages, []);
                        }
                        break;
                    case 'invalidShown':
                        runFullValidationAndUpdateValue();
                        break;
                }
            }
        }
        if (initialRender.current) {
            initialRender.current = false;
        }
        (0, hooks_1.useEffect)(() => {
            _dispatch(reducer_1.updatePreviousValue, value);
            _dispatch(reducer_1.updatePreviousConverter, converter);
            _dispatch(reducer_1.updatePreviousValidators, validators);
            _dispatch(reducer_1.updatePreviousDeferredValidators, deferredValidators);
            _dispatch(reducer_1.updatePreviousDisabled, disabled);
            _dispatch(reducer_1.updatePreviousReadonly, readonly);
            _dispatch(reducer_1.updateCustomMessages, messagesCustom);
            if (!disabled && !readonly) {
                const validated = (0, validationUtils_1.validateSync)({ validators: deferredValidators ?? [], value });
                validated.result === 'failure' &&
                    _dispatch(reducer_1.updateHiddenMessages, validated.errors) &&
                    _dispatch(reducer_1.updateValidStatus, 'invalidHidden');
                validated.result === 'success' &&
                    _dispatch(reducer_1.updateValidStatus, (0, utils_1.hasErrorMessages)(messagesCustom) ? 'invalidShown' : 'valid') &&
                    refreshDisplayValue(value);
            }
            else {
                _dispatch(reducer_1.updateValidStatus, 'valid');
                refreshDisplayValue(value);
            }
        }, []);
        return {
            value: state.value,
            displayValue: state.displayValue,
            methods: {
                reset,
                showMessages,
                validate
            },
            textFieldProps: {
                'aria-describedby': ariaDescribedBy,
                messages: displayOptions?.messages !== 'none' ? state.shownMessages : undefined,
                onCommit,
                onInput,
                value: state.displayValue
            }
        };
    }
    exports.useEditableValue = useEditableValue;
});
