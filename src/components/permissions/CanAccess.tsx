import type { PropsWithChildren } from "react";
import { hasPermission, useCurrentUser } from "../../utils/userUtils";
import type { Permissions } from "../types/User";

interface CanAccessProps extends PropsWithChildren {
    permission: Permissions;
}
const CanAccess = ({permission,children}:CanAccessProps) => {
    const userRole = useCurrentUser().role;
    if(!hasPermission(userRole,permission))
        return null;
    return children;
}

export default CanAccess



