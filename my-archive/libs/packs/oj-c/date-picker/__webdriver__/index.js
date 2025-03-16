"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDatePicker = exports.DatePickerWebElement = void 0;
var oraclejet_webdriver_1 = require("@oracle/oraclejet-webdriver");
var DatePickerWebElement_1 = require("./DatePickerWebElement");
Object.defineProperty(exports, "DatePickerWebElement", { enumerable: true, get: function () { return DatePickerWebElement_1.DatePickerWebElement; } });
/**
 * Retrieve an instance of [DatePickerWebElement](../classes/DatePickerWebElement.html).
 * @example
 * ```javascript
 * import { findDatePicker } from '@oracle/oraclejet-core-pack/webdriver';
 * const el = await findDatePicker(driver, By.id('my-oj-c-date-picker'));
 * ```
 * @param driver A WebDriver/WebElement instance from where the element will be
 * searched. If WebDriver is passed, the element will be searched globally in the
 * document. If WebElement is passed, the search will be relative to this element.
 * @param by The locator with which to find the element
 */
async function findDatePicker(driver, by) {
    const webEl = await driver.findElement(by);
    // Check that the element is of type DatePickerWebElement
    if (!(webEl instanceof DatePickerWebElement_1.DatePickerWebElement)) {
        const tagName = await webEl.getTagName();
        let supplemental = '';
        if (webEl.constructor.name === 'DatePickerWebElement') {
            supplemental = 'You likely have multiple installations of this package.';
        }
        throw Error(`findDatePicker(${by}) created ${webEl.constructor.name} for <${tagName}>, but expected ${DatePickerWebElement_1.DatePickerWebElement.name}. ${supplemental}`);
    }
    return webEl;
}
exports.findDatePicker = findDatePicker;
(0, oraclejet_webdriver_1.register)('oj-c-date-picker', DatePickerWebElement_1.DatePickerWebElement);
//# sourceMappingURL=index.js.map