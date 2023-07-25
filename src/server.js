const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "max-age=31536000");
  next();
});

app.use(express.static(path.join(__dirname, "dist/vidamms-angular")));

const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server is running, PORT: ${port}`));
