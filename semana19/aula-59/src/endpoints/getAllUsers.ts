import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export const getAllUsers = async (req: Request, res: Response) => {
    const userBusiness = new UserBusiness();

    try {
        const token = req.headers.authorization!;
        const users = await userBusiness.getAllUsers(token);
        res.send(users).status(200);
    } catch (error) {
        res.send({ message: error.message }).status(error.status);
    }
}