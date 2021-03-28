import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from './models';


const router = Router();


router.get("/users", async (req: Request, res: Response): Promise<Response> =>{
	const users = await getRepository(User).find();
	return res.json(users);
});

// router.post("/users", ()=>{
	
// });

// router.put("/users", ()=>{
	
// });

// router.delete("/users", ()=>{
	
// });


export default router;
