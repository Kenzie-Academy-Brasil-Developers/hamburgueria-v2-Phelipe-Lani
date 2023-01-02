export interface iRespApi {
  accessToken: string;
  user: iApiUser;
}

export interface iApiUser {
  email: string;
  name: string;
  id: number;
}

export interface iItens {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}


