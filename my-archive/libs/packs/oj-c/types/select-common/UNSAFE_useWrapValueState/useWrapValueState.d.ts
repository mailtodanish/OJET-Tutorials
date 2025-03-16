import { ValueState } from 'oj-c/editable-value/UNSAFE_useValue/useValue';
import { Dispatch, StateUpdater } from 'preact/hooks';
type Props<ValueItemType> = {
    arItemContexts?: ValueItemType;
    isLoading?: boolean;
    preactValueItems?: ValueItemType;
    setPreactValueItems: Dispatch<StateUpdater<ValueItemType | undefined>>;
};
type ValidState = 'valid' | 'pending' | 'invalidHidden' | 'invalidShown';
export declare function useWrapValueState<ValueType, ValueItemType>({ arItemContexts, isLoading, preactValueItems, setPreactValueItems }: Props<ValueItemType>): {
    wrapValueState: (valueState: ValueState<ValueType>) => {
        getValueForValidation: (valid: ValidState) => ValueType | null;
        refreshDisplayValue: () => void;
        displayValue: string;
        transientValue: ValueType;
        value: ValueType;
        setValueAfterValidation: (value: ValueType) => void;
        setDisplayValue: Dispatch<StateUpdater<string>>;
        setTransientValue: Dispatch<StateUpdater<ValueType>>;
        setValue: Dispatch<StateUpdater<ValueType>>;
    };
};
export {};
