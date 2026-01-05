const fs = require("fs");

// ==============================
// 1️⃣ Incoming API Request
// ==============================
function handleRequest() {
  console.log("🟢 Request received");

  Promise.resolve()
    .then(() => {
      console.log("🟡 Promise 1: decode JWT");
    })
    .then(() => {
      console.log("🟡 Promise 1: fetch user permissions");
    });

  Promise.resolve()
    .then(() => {
      console.log("🟡 Promise 1: decode JWT");
    })
    .then(() => {
      console.log("🟡 Promise 1: fetch user permissions");
    });

  Promise.resolve()
    .then(() => {
      console.log("🟡 Promise 2 : decode JWT");
    })
    .then(() => {
      console.log("🟡 Promise 2 : fetch user permissions");
    });

  Promise.resolve()
    .then(() => {
      console.log("🟡 Promise 3 : decode JWT");
    })
    .then(() => {
      console.log("🟡 Promise 3 : fetch user permissions");
    });

  Promise.resolve()
    .then(() => {
      console.log("🟡 Promise 4: decode JWT");
    })
    .then(() => {
      console.log("🟡 Promise 4 : fetch user permissions");
    });
  // 🔥 CRITICAL cleanup / validation
  process.nextTick(() => {
    console.log("🔴 process.nextTick: validate auth token");
  });

  // 🔹 Promise-based business logic
  Promise.resolve()
    .then(() => {
      console.log("🟡 Promise 2: decode JWT");
    })
    .then(() => {
      console.log("🟡 Promise 2: fetch user permissions");
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

  process.nextTick(() => {
    console.log("🟢 Last process.nextTick");
    process.nextTick(() => {
      console.log("🟢 Last process.nextTick");
      process.nextTick(() => {
        console.log("🟢 Last process.nextTick");
        process.nextTick(() => {
          console.log("🟢 Last process.nextTick");
        });
      });
    });
  });

  console.log("🟢 Request handler finished");
}

handleRequest();
