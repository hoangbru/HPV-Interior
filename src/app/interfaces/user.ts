export interface IUser{
    _id?:number | string;
    username?:string;
    email?:string;   
    password:string;
    confirmPassword?: string;
    img?:string;
    address?:string;
    sdt?:string;
    gender?: string;
    role?:string;
}