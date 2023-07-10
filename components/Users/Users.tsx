import React from "react";
import { User } from "../../types";
import Image from "next/image";

//User Props imported User Interface from types passing the user type and onclick as props
interface UserListProps {
  user: User;
  onClick: () => void;
}

const Users: React.FC<UserListProps> = ({ user, onClick }) => {
  return (
    <li className="pb-3 pt-3 mb-3 cursor-pointer" onClick={onClick}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="w-12 h-12 rounded-full bg-[#f2f2f2]"
            src={user.image}
            alt={user.firstName}
            width="48"
            height="48"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-600">
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
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500">{user.phone}</p>
        </div>
      </div>
    </li>
  );
};
export default Users;
