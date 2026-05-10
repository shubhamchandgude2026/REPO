import { createMapper } from "../utils/utils";
import type { UserRoles } from "./types/User";

const Mapper = () => {
  const roles = [
    { value: "ADMIN", label: "Administrator" },
    { value: "USER", label: "Normal User" },
  ];
  const ADMIN_MAPPER:Record<UserRoles,string> = createMapper(roles);
  console.log(ADMIN_MAPPER);
  
  return <div>
    <h1>Mapper</h1>
    {
        ADMIN_MAPPER["ADMIN"]
    }
  </div>;
};

export default Mapper;
