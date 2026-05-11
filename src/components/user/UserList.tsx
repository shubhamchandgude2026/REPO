import { useState } from "react";
import UserCard from "../compoundComponents/user_card/UserCard";
import { users, type Permissions, type User } from "../types/User";

const UserList = () => {

     interface UserModalProps {
        isOpen: boolean;
        mode : Permissions;
        selectedUser: User | null
     }
    const initialState:UserModalProps = {
        isOpen: false,
        mode: "READ",
        selectedUser: null
    }

    const [userModal,setUserModal] = useState<UserModalProps>(initialState);
    const handleOpen = (userId:number)=>{
        console.log("open modal",userId);
    }
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
      gap: "20px",
      padding: "24px" 
    }}>
      {users.map((user) => {
        return (
          <UserCard user={user} key={user.id}>
            <UserCard.OpenButton onOpen={()=>handleOpen(user.id)}/>
            <UserCard.Role />
            <UserCard.Profile />
            <UserCard.Actions/>
          </UserCard>
        );
      })}
    </div>
  );
};

export default UserList;
