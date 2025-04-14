const socket = io("http://localhost:4001", {
  query: {
    name: "nasi",
    field: "react dev",
    role: "admin",
  },
  transportOptions: {
    polling: {
      extraHeaders: {
        "Content-Type": "application/json",
        Authorization: "rjtasoeijariej.erriroojggvjjdfkjgl.ddfjgdfjggioejnn",
      },
    },
  },
});

const input = document.querySelector(".write-message");
const chat = document.querySelector(".messages-chat");

socket.on("connect", () => {
  console.log("user connect app.js");

  input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      if (event.target.value.trim()) {
        socket.emit("message", event.target.value.trim());
        input.value = "";
      }
    }
  });
});

socket.on("message", (event) => {
  chat.insertAdjacentHTML(
    "beforeend",
    `
      ${
        data.userID === userID
          ? `
          <div class="message">
            <div class="response">
              <p class="text">${data.message}</p>
            </div>
          </div>
        `
          : `
          <div class="message">
            <p class="text">${data.message}</p>
          </div>
        `
      }
      `
  );
});
