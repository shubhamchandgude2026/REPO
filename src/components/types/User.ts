
export type UserRoles = "ADMIN" | "USER" | "STAFF";
export type Permissions = "READ" | "EDIT" | "DELETE";
export interface User {
    id:number;
    name:string;
    role: UserRoles;
}


export const ROLE_PERMISSIONS:Record<UserRoles,Permissions[]> = {
    "ADMIN" : ["READ","EDIT","DELETE"],
    "USER" : ["READ"],
    "STAFF" : ["READ", "EDIT"]
}
