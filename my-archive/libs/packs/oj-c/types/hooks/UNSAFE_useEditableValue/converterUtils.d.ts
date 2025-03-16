import type { ComponentMessageItem } from '@oracle/oraclejet-preact/UNSAFE_ComponentMessage';
import type { Converter } from './types';
type ConversionSuccess<T> = {
    result: 'success';
    value: T;
};
type ConversionFailure = {
    result: 'failure';
    error: ComponentMessageItem;
};
type ConversionResult<T> = ConversionFailure | ConversionSuccess<T>;
declare function parse<V, DV>(displayValue: DV, converter: Converter<V, DV>): ConversionResult<V>;
declare function format<V, DV>(value: V, defaultValue: DV, converter: Converter<V, DV>): ConversionResult<DV>;
export { format, parse };
