import { hasPermission, useCurrentUser } from "../../utils/userUtils";
import type { Permissions } from "../types/User";

type CanAccessProps = {
    permission: Permissions;
    children:React.ReactNode;
}
const CanAccess = ({permission,children}:CanAccessProps) => {
    const userRole = useCurrentUser().role;
    if(!hasPermission(userRole,permission))
        return null;
    return children;
}

export default CanAccess



