// //console.log("hello world");

// // function delay(mbs) {
// //   return new Promise((resolve, reject) => {
// //     resolve(
// //       setTimeout(() => {
// //         resolve;
// //       }, mbs)
// //     );
// //   });
// // }
// // async function seq() {
// //   console.log("a");

// //   console.log("b");
// //   await delay(3000);
// //   console.log("c");
// //   await delay(0);
// //   console.log("d");

// //   console.log("e");
// // }
// // seq();
// const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
// const res = array.map((item) => {
//   if (item === " ") {
//     return "empty string";
//   } else {
//     return item;
//   }
// });
// console.log(
const http = require("http");
const fs = require("fs");
const { error } = require("console");
const querystring = require("querystring");
const server = http.createServer(function rqListenser(req, res) {
  console.log("sandesh");

  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    const message = fs.readFileSync("message.txt", "utf-8");
    res.write("<html>");
    res.write("<head>Enter Message </head>");
    message.split("\n").forEach((message) => {
      if (message.trim() !== "") {
        res.write(`<li>${message}</li>`);
      }
    });
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body>"
    );

    res.write("<html/>");
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      console.log(parsedbody);
      const msg = parsedbody.split("=")[1];

      fs.writeFile("message.txt", msg + "\n", (error) => {
        if (error) {
          console.log("error:", error);
        } else {
          console.log("no error");
        }
      });
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }

  // if (url === "/about") {
  //   res.write("<html>");
  //

  //   res.write("<html/>");
  // }

  // if (url === "/node") {
  // res.write("<html>");
  // res.write("<head> myfirst page  </head>");
  // res.write("<body> helo </body>");
  // res.write("<html/>");
  // }

  // res.end();
  // process.exit();
});
server.listen(4000);
