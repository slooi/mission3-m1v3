import express from "express"
import path from "path"
// import {fileURLToPath} from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = require('path').dirname(require.main.filename);

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static(path.join(process.cwd(),"dist")))

app.get("/a",(req,res)=>{
	res.send("<h1>a route</h1>")
})
app.get("/a2",(req,res)=>{
	res.send("<h1>a2 routes345</h1>")
})

app.listen(PORT,()=>console.log("LISTENING ON PORT"+PORT))