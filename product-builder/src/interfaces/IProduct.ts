export interface IProduct {
  id?: string | undefined;
  productTitle: string;
  productDescription: string;
  imgSource: string;
  cost: string;
  colors: string[];
  category:{
    name: string;
    logoUrl: string;
  }
}