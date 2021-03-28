import 'reflect-metadata';

import express from "express";
// import {Request, Response} from "express";
import cors from 'cors';
import morgan from 'morgan';
import {createConnection} from 'typeorm';
import useRoutes from './routes';

const PORT = 4000;

// create and setup express app
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

createConnection();
// register routes

app.use(useRoutes);

// app.get("/users", function(req: Request, res: Response) {
//     // here we will have logic to return all users
// });

// app.get("/users/:id", function(req: Request, res: Response) {
//     // here we will have logic to return user by id
// });

// app.post("/users", function(req: Request, res: Response) {
//     // here we will have logic to save a user
// });

// app.put("/users/:id", function(req: Request, res: Response) {
//     // here we will have logic to update a user by a given user id
// });

// app.delete("/users/:id", function(req: Request, res: Response) {
//     // here we will have logic to delete a user by a given user id
// });

// start express server
app.listen(3000);