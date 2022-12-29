export interface iAcessUser {
  name?: string;
  email: string;
  password: number;
}

export interface iRespApiUser {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: number;
  };
}

export interface iProduct{
    id:number,
    name:string,
    category:string,
    price:number,
    img:string
}
