import express from "express";
import {Request, Response} from "express";

const r_api = express.Router()


const c_estimateCarValue = (req:Request,res:Response)=>{
	res.send("hi")
	// try{
	// 	// Validate unsafe input
	// 	const validatedQuery = v_estimateCarValue.parse(req.query)

	// 	// 
	// 	const carValue = s_estimateCarValue(validatedQuery)
	// 	res.json({car_value:carValue})
	// }catch{
	// 	res.json({error:"there was an error"})
	// }
}

// const estimateCarValue = (estimateCarValueInput:t_estimateCarValue):number=>{
// 	const {model,year}=v_estimateCarValue.parse(estimateCarValueInput)

// 	let carValue:number = 0

// 	// Calculate car value from alphabet position
// 	for(let i=0;i<model.length;i++){
// 		carValue += s_getAlphabetPosition(model[i]) * 100
// 	}

// 	// Add year price
// 	carValue += year

// 	// Return
// 	return carValue
// }


// Routes -> Controllers
r_api.get("/estimate-car-value",c_estimateCarValue)

export default r_api