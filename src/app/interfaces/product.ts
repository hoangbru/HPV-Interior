import { ICategory } from "./category";

export interface IProduct {
    _id?: number | string;
    code?: string | number; 
    name?: string,
    thumbnail?: string,
    quantity?: number,
    importPrice?:number,
    price?: number,
    description?: string,
    status?: string,
    slug?: string,
    categoryId?: string,
    sizeId?:[],
    colorId?:[],
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
    deleted?: Boolean,
}