import { createContext, useContext, type PropsWithChildren } from "react";
import { ROLE_COLOR_MAPPER, type User } from "../../types/User";
import "./UserCard.css";
import CanAccess from "../../permissions/CanAccess";

interface UsermodalProps extends PropsWithChildren {
  user: User;
}
const UserCardContext = createContext<User | undefined>(undefined);

const useUserCardContext = () => {
  const context = useContext(UserCardContext);
  if (!context) throw Error("User Data must be in UserCard Context");
  return context;
};

interface UserCardActionProps {
  onDelete?: () => void;
  onEdit?: () => void;
}

interface UserCardOpenButton {
  onOpen: () => void;
}
interface UserCardComponent extends React.FC<UsermodalProps> {
  OpenButton: React.FC<UserCardOpenButton>;
  Profile: React.FC;
  Role: React.FC;
  Actions: React.FC<UserCardActionProps>;
}

const UserCard: UserCardComponent = ({ user, children }: UsermodalProps) => {
  return (
    <UserCardContext.Provider value={{ ...user }}>
      <div className="user-modal-container">{children}</div>
    </UserCardContext.Provider>
  );
};

UserCard.Profile = () => {
  const { name, email, id } = useUserCardContext();
  return (
    <div className="user-modal-profile">
      <div className="user-modal-avatar">{name.charAt(0).toUpperCase()}</div>
      <div className="user-modal-info">
        <h3>{name}</h3>
        <p>{email || `user_${id}@example.com`}</p>
      </div>
    </div>
  );
};

UserCard.Role = () => {
  const { role } = useUserCardContext();
  const roleClass = `user-modal-role-badge ${ROLE_COLOR_MAPPER[role] ?? role.toLowerCase()}`;
  return <div className={roleClass}>{role}</div>;
};

UserCard.Actions = ({ onDelete, onEdit }: UserCardActionProps) => {
  return (
    <div className="user-modal-actions">
      <CanAccess permission="EDIT">
        <button className="btn-action btn-edit" onClick={onEdit}>
          Edit Profile
        </button>
      </CanAccess>
      <CanAccess permission="READ">
        <button className="btn-action btn-delete" onClick={onDelete}>
          Delete
        </button>
      </CanAccess>
    </div>
  );
};

UserCard.OpenButton = ({ onOpen }: UserCardOpenButton) => {
  return (
    <div className="user-card-header">
      <button className="btn-action btn-open" onClick={onOpen}>
        Open
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </button>
    </div>
  );
};
export default UserCard;
