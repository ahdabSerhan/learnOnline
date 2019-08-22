export interface User{
  uid: string;
  email: string;
  displayName:string;
  photoURL: string;
  role?: Roles;
}
export interface Roles{
subscriber?:boolean;
admin?:boolean;
}
