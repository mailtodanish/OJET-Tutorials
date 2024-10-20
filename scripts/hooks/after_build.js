const fs = require("fs");
const archiver = require("archiver");

module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
    console.log("Running after_build hook.");

    //Set up the archive
    const output = fs.createWriteStream("my-archive.war");
    const archive = archiver("zip");

    //Callbacks for the archiver
    output.on("close", () => {
      console.log("Files were successfully archived.");
      resolve();
    });

    archive.on("warning", (error) => {
      console.warn(error);
    });

    archive.on("error", (error) => {
      reject(error);
    });

    //Archive the web folder and close the file
    archive.pipe(output);
    archive.directory("web", false);
    archive.finalize();
  });
};
