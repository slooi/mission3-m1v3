import express from "express";
import path from "path";
import { r_api } from "./route.js";
const app = express();

app.use(express.static(path.join(process.cwd(), "dist")));

app.get("/", (req, res) => {
	res.send("<h1>root route</h1>");
});

app.use(r_api);

export default app;
