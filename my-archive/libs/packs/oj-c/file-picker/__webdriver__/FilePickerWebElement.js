"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePickerWebElement = void 0;
var FilePickerWebElementBase_1 = require("./FilePickerWebElementBase");
var fs = require("fs");
var path = require("path");
var busy_context_utils_1 = require("@oracle/oraclejet-webdriver/lib/busy-context-utils");
/**
 * The component WebElement for [oj-c-file-picker](../../../oj-c/docs/oj.FilePicker.html).
 * Do not instantiate this class directly, instead, use
 * [findFilePicker](../functions/findFilePicker.html).
 */
class FilePickerWebElement extends FilePickerWebElementBase_1.FilePickerWebElementBase {
    /**
     * Takes an Array of objects containing file paths + types.
     * These files will be read from the local filesystem and then sent
     * to the oj-file-picker to simulate user file selection. Only the basename of
     * the file will be sent, not the entire path to make it consistent with how
     * the browser sets the value.
     * @param files An array of objects containing the path and type of selected files
     */
    async doSelect(files) {
        await FilePickerWebElement.setupPickFiles(this.getDriver(), files);
        await this.getDriver().executeScript(`arguments[0].firstChild.click();`, this);
        await this.whenBusyContextReady();
    }
    /**
     * This method should be called right before ojfilepickerutils.pickFiles
     * Takes the webdriver and an Array of objects containing file paths + types.
     * These files will be read from the local filesystem and then sent
     * to the pickFiles method to simulate user file selection. Only the basename of
     * the file will be sent, not the entire path to make it consistent with how
     * the browser sets the value.
     * @param driver the Webdriver of the test
     * @param files An array of objects containing the path and type of selected files
     */
    static async setupPickFiles(driver, files) {
        await (0, busy_context_utils_1.whenBusyContextReady)(driver);
        //create a buffer with the files
        const dataList = files.map(({ path: filePath, type }) => {
            const fileSizeInMB = fs.statSync(filePath).size / (1024 * 1024);
            const numberChunks = Math.ceil(fileSizeInMB / 8);
            const fileContent = Array.from(fs.readFileSync(filePath));
            const chunkSize = Math.floor(fileContent.length / numberChunks);
            const fileChunks = [];
            for (let i = 0; i < numberChunks; i++) {
                if (i + 1 == numberChunks) {
                    fileChunks.push(fileContent.slice(i * chunkSize));
                }
                else {
                    fileChunks.push(fileContent.slice(i * chunkSize, (i + 1) * chunkSize));
                }
            }
            return {
                bytes: fileChunks, //split it into 8MB chunks
                path: path.basename(filePath),
                type,
                numberChunks
            };
        });
        for (let i = 0; i < dataList.length; i++) {
            const { bytes, path, type, numberChunks } = dataList[i];
            for (let j = 0; j < bytes.length; j++) {
                const file = {
                    bytes: bytes[j],
                    path,
                    type,
                    numberChunks,
                    chunkNumber: j,
                    fileNumber: i
                };
                await driver.executeScript(`const file = arguments[0];
           const chunkNumber = file.chunkNumber;
           var data = {
            bytes: file.bytes,
            path: file.path,
            type: file.type
           }
           if (chunkNumber == 0) {
            window['_file' + file.fileNumber] = [data];
           } else {
            window['_file' + file.fileNumber].push(data);
           }`, file);
            }
        }
        driver.executeScript(`const numFiles = arguments[0];
      const list = [];
      for ( let i = 0; i < numFiles; i++) {
        const file = window['_file' + i];
        delete window['_file' + i];
        list.push({
          bytes: file.map(chunk => chunk.bytes).join(''),
          path: file[0].path,
          type: file[0].type
        });
      }
      const fileList = list.map((data) => {
        return new File([Uint8Array.from(data.bytes)], data.path, {type: data.type});
       })
       // Only if setupPickFiles has not been called yet
       if (!HTMLInputElement.prototype._pickerTestData) {
        //Save the native click method
        const clickMethod = HTMLInputElement.prototype.click;
        //Overwrite the click method
        HTMLInputElement.prototype.click = function() {
          const event = new CustomEvent("change");
          this.dispatchEvent(event);
          delete HTMLInputElement.prototype._pickerTestData;
          HTMLInputElement.prototype.click = clickMethod;
        }
       }
       HTMLInputElement.prototype._pickerTestData = fileList;
       `, dataList.length);
    }
}
exports.FilePickerWebElement = FilePickerWebElement;
//# sourceMappingURL=FilePickerWebElement.js.map