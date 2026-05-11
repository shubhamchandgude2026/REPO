import {
  ROLE_PERMISSIONS,
  type Permissions,
  type User,
  type UserRoles,
} from "../components/types/User";

export const hasPermission = (role: UserRoles, permission: Permissions): boolean => {
  if (ROLE_PERMISSIONS[role].includes(permission)) return true;
  return false;
};

export const useCurrentUser = (): User => {
  return {
    id: 1,
    name: "shubham",
    role: "STAFF",
  };
};
