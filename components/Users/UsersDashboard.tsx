import React from "react";
import { User } from "../../types";

//User Props imported User Interface from types passing the user type and onclick as props
interface UserListProps {
  user: User;
  onClick: () => void;
}

const UsersDashboard: React.FC<UserListProps> = ({ user, onClick }) => {
  return (
    <li className="pt-3 mb-3 cursor-pointer" onClick={onClick}>
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-600 ">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500">{user.company.title}</p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500">{user.company.name}</p>
        </div>
      </div>
    </li>
  );
};
export default UsersDashboard;
