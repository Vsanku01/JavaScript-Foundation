const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// Setting the Port Number for the server to listen for requests
const port = 8000;
// Loop back IP Address
const hostname = "127.0.0.1";
let directoryPath = path.join(__dirname, "../Arrays");

// Mapping the filenames with their respective images to used in list-style-image property
let dirMap = {
  js: "./Pics/code.png",
  dir: "./Pics/file.png",
  png: "./Pics/photo.png",
  jpg: "./Pics/photo.png",
};

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  // Checking the requested path
  if (pathname === "/" || pathname === "/get") {
    // Setting the status code and response type of response
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(__dirname);
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        return console.log("Unable to scan directory" + err);
      } else {
        let html = "";
        // Dynamic checking of file extension and changing the list-style-image associated with it
        let src = "";
        if (
          path.extname(`${file}` === ".png") ||
          path.extname(`${file}` === ".jpg")
        ) {
          src = dirMap.png;
        } else if (path.extname(`${file}` === ".dir")) {
          src = dirMap.dir;
        } else if (path.extname(`${file}` === ".js")) {
          src = dirMap.js;
        }
        // Appending html
        files.forEach((file) => {
          html += `
          <img src=${src}></img>
          <ul><li><button>${file}</button></li></ul>`;
        });

        // Sending response back to the server
        res.end(`${html}`);
      }
    });
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests 🎧 on port 8000");
});
