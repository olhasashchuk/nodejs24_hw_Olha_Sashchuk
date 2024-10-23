import { IUser } from "./user.interface";


export type IUpdateUser = Partial<Omit<IUser, 'id'>>;