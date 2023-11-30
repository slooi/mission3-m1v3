import express from "express"
import path from "path"
import {r_api} from "./route.js"
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static(path.join(process.cwd(),"dist")))

app.use(r_api)

app.listen(PORT,()=>console.log("LISTENING ON PORT"+PORT))