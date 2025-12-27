const fs = require("fs");

// ==============================
// 1️⃣ Incoming API Request
// ==============================
function handleRequest() {
  console.log("🟢 Request received");

  // 🔥 CRITICAL cleanup / validation
  process.nextTick(() => {
    console.log("🔴 process.nextTick: validate auth token");
  });

  // 🔹 Promise-based business logic
  Promise.resolve()
    .then(() => {
      console.log("🟡 Promise: decode JWT");
    })
    .then(() => {
      console.log("🟡 Promise: fetch user permissions");
    });

  // 🔹 Async I/O operation
  fs.readFile(__filename, () => {
    console.log("🔵 fs.readFile callback (I/O)");

    // Post-I/O action
    setImmediate(() => {
      console.log("🟣 setImmediate: send response");
    });

    // Timer inside I/O
    setTimeout(() => {
      console.log("🟠 setTimeout (inside I/O): analytics event");
    }, 0);
  });

  // 🔹 Timer (not guaranteed immediate)
  setTimeout(() => {
    console.log("🟠 setTimeout: background cleanup");
  }, 0);

  // 🔹 Explicit post-poll execution
  setImmediate(() => {
    console.log("🟣 setImmediate: log request");
  });

  console.log("🟢 Request handler finished");
}

handleRequest();
