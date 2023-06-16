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
// console.log(res);

const http = require("http");
const server = http.createServer(function rqListenser(req, res) {
  console.log("sandesh");

  console.log(req.url, req.method, req.headers);
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/home") {
    res.write("<html>");
    res.write("<head>welcome home  </head>");

    res.write("<html/>");
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head>welcome to About us  </head>");

    res.write("<html/>");
  }

  if (url === "/node") {
    res.write("<html>");
    res.write("<head> myfirst page  </head>");
    res.write("<body> helo </body>");
    res.write("<html/>");
  }

  res.end();
  process.exit();
});
server.listen(4000);
