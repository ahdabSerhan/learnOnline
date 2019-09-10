export interface Catagorey {
  title: string;
  description: string;
  url : string;
  topics : Array<Topic>;
}
export interface Topic {
  description: string;
  img:string;
  price:string;
}
