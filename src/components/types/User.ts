export type UserRoles =
  | "ADMIN"
  | "USER"
  | "STAFF"
  | "MANAGER"
  | "DEVELOPER"
  | "TESTER";
export type Permissions = "READ" | "EDIT" | "DELETE";
export interface User {
  id: number;
  name: string;
  role: UserRoles;
  email?: string;
}

export const ROLE_PERMISSIONS: Record<UserRoles, Permissions[]> = {
  ADMIN: ["READ", "EDIT", "DELETE"],
  USER: ["READ"],
  STAFF: ["READ", "EDIT"],
  MANAGER: ["READ"],
  DEVELOPER: ["READ", "DELETE", "EDIT"],
  TESTER: ["READ"],
} as const;
export type ColorMapperLabels = "role-admin" | "role-user" | "role-staff" | "role-developer" | "role-manager" | "role-tester";
export const ROLE_COLOR_MAPPER: Record<UserRoles, ColorMapperLabels> = {
  ADMIN: "role-admin",
  USER : "role-user",
  STAFF: "role-staff",
  MANAGER: "role-manager",
  DEVELOPER: "role-developer",
  TESTER:'role-tester'

};
export const users: User[] = [
  {
    id: 1,
    name: "Shubham Chandgude",
    role: "ADMIN",
    email: "shubham@example.com",
  },
  {
    id: 2,
    name: "Aarav Patil",
    role: "MANAGER",
    email: "aarav@example.com",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "DEVELOPER",
    email: "priya@example.com",
  },
  {
    id: 4,
    name: "Rohit Verma",
    role: "TESTER",
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "DEVELOPER",
    email: "neha@example.com",
  },
];
