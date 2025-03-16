define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = exports.format = void 0;
    function parse(displayValue, converter) {
        if (displayValue === undefined) {
            return { result: 'success', value: null };
        }
        if (shouldSkipParse(displayValue)) {
            return { result: 'success', value: displayValue };
        }
        try {
            return {
                result: 'success',
                value: converter.parse(displayValue)
            };
        }
        catch (error) {
            return {
                result: 'failure',
                error: (0, utils_1.createMessageFromError)(error)
            };
        }
    }
    exports.parse = parse;
    function format(value, defaultValue, converter) {
        if (shouldSkipFormat(value)) {
            return { result: 'success', value: defaultValue };
        }
        try {
            return {
                result: 'success',
                value: converter.format(value)
            };
        }
        catch (error) {
            return {
                result: 'failure',
                error: (0, utils_1.createMessageFromError)(error)
            };
        }
    }
    exports.format = format;
    function shouldSkipParse(value) {
        return value === '' || value === null;
    }
    function shouldSkipFormat(value) {
        return value === null;
    }
});
