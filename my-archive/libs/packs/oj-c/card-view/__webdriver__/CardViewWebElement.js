"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardViewWebElement = void 0;
var CardViewWebElementBase_1 = require("./CardViewWebElementBase");
var selenium_webdriver_1 = require("selenium-webdriver");
var oraclejet_webdriver_1 = require("@oracle/oraclejet-webdriver");
var oj_module_proxy_1 = require("@oracle/oraclejet-webdriver/lib/oj-module-proxy");
/**
/**
 * The component WebElement for [oj-c-card-view](../../../oj-c/docs/oj.CardView.html).
 * Do not instantiate this class directly, instead, use
 * [findCardView](../modules.html#findCardView).
 */
class CardViewWebElement extends CardViewWebElementBase_1.CardViewWebElementBase {
    // Put overrides here
    /**
     * Sets the value of "selected" property.
     * Specifies the current selected items in the listview. See the Help documentation for more information.
     * @param selected The value to set for "selected"
     * @override
     * @typeparam K Type of keys
     */
    async changeSelected(selected) {
        await this.whenReady();
        return (0, oj_module_proxy_1.executeWithModules)(this.getDriver(), ['KeySet'], [this, selected], `
    ({ KeySetImpl }, ele, selected) => ele.selected = new KeySetImpl(selected)
    `);
    }
    /**
     * Gets the value of "selected" property.
     * Retrieves the current selected items in the listview. See the Help documentation for more information.
     * @override
     * @typeparam K Type of keys
     * @return The value of "selected" property.
     */
    async getSelected() {
        await this.whenReady();
        const selected = await this.getDriver().executeScript(`
      const ele = arguments[0];
      const selected = ele.selected.isAddAll() ? Array.from(ele.selected.deletedValues())
      : Array.from(ele.selected.values())
      return selected;
    `, this);
        return selected;
    }
    /**
     * Retrieve a SlotProxy which represents a single listview item.
     * @param key The key within the Collection's dataset associated with the item.
     */
    async findItem(itemLocator) {
        await this.whenReady();
        let el = await this.getDriver().executeScript(`
      const ele = arguments[0].querySelectorAll('[role = gridcell]')
      for(let i = 0; i<ele.length; i++){
        if(ele[i].getAttribute('data-oj-key') === arguments[1].toString()){
          return ele[i];
        }
      }
    `, this, itemLocator.key);
        if (el) {
            el = el.findElement(selenium_webdriver_1.By.css('[role="group"]'));
            return (0, oraclejet_webdriver_1.slotProxy)(el, this);
        }
        else {
            throw Error(`No corresponding item found for the itemLocator`);
        }
    }
}
exports.CardViewWebElement = CardViewWebElement;
//# sourceMappingURL=CardViewWebElement.js.map