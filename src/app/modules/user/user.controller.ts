import { NextFunction, Request, Response } from "express";
import { createUserDB, getAdminUsersFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
	
    const data = req.body;
    const user = await createUserDB(data);
    res.status(200).json({
        success: true,
        data: user
    })  
}


export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body)
        const user = await getUsersFromDB();
        res.status(200).json({
            success: true,
            data: user
        })
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const user = await getUserByIdFromDB(id);
    console.log('hitted from getUserById', id)
    res.status(200).json({
        success: true,
        data: user
    })
}

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getAdminUsersFromDB();
    res.status(200).json({
        success: true,
        data: user
    })
}

// Route => Controller => Service 