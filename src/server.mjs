import "dotenv/config";
import { createServer } from "http";
import app from "./app.mjs";

const port = process.env.PORT || 4022;

const server = createServer(app);

server.listen(port, () => {
  console.log(`server is running at ${port}`);
});
