import express from "express";
import path from "path";
import { r_api } from "./route.js";
const innerHTML = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite + React + TS</title>
		<style>
			* {
				font-family: "Roboto", "Arial", sans-serif;
			}
			table {
				border-collapse: collapse;
				width: 100%;
				margin-top: 20px;
			}

			th,
			td {
				border: 1px solid #ddd;
				padding: 8px;
				text-align: left;
			}

			th {
				background-color: #f2f2f2;
			}
		</style>
	</head>
	<body>
		<h1>REST API</h1>
		<br>
		<h3>GET /estimate-car-value?model={STRING}&year={NUMBER}</h3>
		<h3>EXAMPLE</h3>
		<table>
			<tr>
				<th>Input</th>
				<td>/estimate-car-value?model=civic&year=2014</td>
			</tr>
			<tr>
				<th>Output</th>
				<td>{ "car_value": 6614 }</td>
			</tr>
			<tr>
				<th>Error Output</th>
				<td>{ "error": "there is an error" }</td>
			</tr>
		</table>
	</body>
</html>
`;
const app = express();

app.use(express.static(path.join(process.cwd(), "dist")));

app.get("/", (req, res) => {
	res.send(innerHTML);
});

app.use(r_api);

export default app;
