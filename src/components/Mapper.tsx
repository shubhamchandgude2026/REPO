import { createMapper, getMonthYearFromInput } from "../utils/utils";
import type { UserRoles } from "./types/User";

const Mapper = () => {
  const roles = [
    { value: "ADMIN", label: "Administrator" },
    { value: "USER", label: "Normal User" },
  ];
  const USER_ROLES_MAPPER:Record<UserRoles,string> = createMapper(roles);
  console.log(USER_ROLES_MAPPER);
const {month,year} = getMonthYearFromInput(new Date());
console.log("month",month,year);

  return <div>
    <h1>Mapper</h1>
    {
        USER_ROLES_MAPPER["ADMIN"]
    }
  </div>;
};

export default Mapper;
