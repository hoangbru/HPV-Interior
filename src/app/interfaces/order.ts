import { IProduct } from "./product";

export interface IOrder{
    _id?:number | string; 
    products?: IProduct[],
    idUser?: number,
    name?: string,
    city?: string;
    address?: string;
    quantity?: number,
    total?: number,
    phone?:string,
    days?: string,
    notes?:string,
    status?: any,

}