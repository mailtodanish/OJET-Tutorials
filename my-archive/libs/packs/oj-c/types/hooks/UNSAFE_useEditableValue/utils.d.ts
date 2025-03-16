import type { ComponentMessageItem } from '@oracle/oraclejet-preact/UNSAFE_ComponentMessage';
import type { ConverterError, ValidatorError } from 'ojs/ojvalidation-error';
declare const createMessageFromError: (error: Error | ValidatorError | ConverterError) => ComponentMessageItem;
declare const treatNull: <T>(value?: T | null, defaultValue?: T) => T | undefined;
declare const normalizeValue: <T>(value?: T) => T | null | undefined;
declare const isShallowEqual: <T>(a: T[], b: T[]) => boolean;
declare const hasErrorMessages: (messages?: ComponentMessageItem[]) => boolean;
export { createMessageFromError, hasErrorMessages, isShallowEqual, normalizeValue, treatNull };
