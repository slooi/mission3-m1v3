import express from "express";
import {Request, Response} from "express";
import { z } from "zod";

const r_api = express.Router()


const c_estimateCarValue = (req:Request,res:Response)=>{
	try{
		// Validate unsafe input
		const validatedQuery = v_estimateCarValue.parse(req.query)
		console.log(validatedQuery)
		console.log(validatedQuery)
		console.log(validatedQuery)
		console.log(validatedQuery)
		
		const carValue = s_estimateCarValue(validatedQuery)
		res.json({car_value:carValue})
	}catch (err){
		console.log(err)
		res.json({error:"there was an error"})
	}
}
const v_estimateCarValue = z.object({
	model: z.string().min(1,"String length must be > 0"),

	year: z.union([
		z.string()
		.refine((stringNumber)=>{
			const numberOrNan = Number(stringNumber);
			return !isNaN(numberOrNan)
		},{message:"String was not able to be parsed into a number!"})
		.transform((stringNumber) => {
			return Number(stringNumber)
		}),
		z.number()
	])
	.refine((number)=>{
		return number>=0
	},{message:"Year must be a positive number"}),
});

type t_estimateCarValue = z.infer<typeof v_estimateCarValue>

const s_estimateCarValue = (estimateCarValueInput:t_estimateCarValue):number=>{
	const {model,year}=v_estimateCarValue.parse(estimateCarValueInput)

	let carValue:number = 0

	// Calculate car value from alphabet position
	for(let i=0;i<model.length;i++){
		carValue += s_getAlphabetPosition(model[i]) * 100
	}

	// Add year price
	carValue += year

	// Return
	return carValue
}


const s_getAlphabetPosition = (letter:string)=>{
	// Expects a string with length 1 representing a single alphabet
	// Returns the position of alphabet (eg: a=>1,A=>1,Z=>26)

	// Check
	if (letter.length > 1) throw new Error("ERROR_ARGUMENT_LENGTH_NOT_ONE")

	// Determine position of alphabet
	const charCode:number = letter.toLowerCase().charCodeAt(0)
	if (charCode >= 97 && charCode <= 97+25){
		return charCode-96
	}

	// Return
	return 0
}

// Routes -> Controllers
r_api.get("/estimate-car-value",c_estimateCarValue)

export{ r_api}