import React, { useEffect, useState } from "react";
import { UsersDashboard, Alert } from "../";
import { getUsers } from "../../services";
import { UserLisResponseData } from "../../types";
import { useRouter } from "next/router";
import { useStateContext } from "../../contexts/ContextProvider"

const DashboardList: React.FC<{}> = () => {
  const [users, setUsers] = useState<UserLisResponseData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { setUserData } = useStateContext();

  const fetchUserData = async (page: number) => {
    try {
      setError(false);
      setErrorMessage("");

      const response = await getUsers(page);

      setUsers(response);
    } catch (error: any) {
      setError(true);
      setErrorMessage(`${error}`);

      setTimeout(() => {}, 2000);
    }
    setTimeout(() => {}, 2000);
  };

  //since we loading the users on page load so we calling fetch data function
  useEffect(() => {
    fetchUserData(currentPage);
  }, [currentPage]);

  // handling selected user by passing user id as parameter
  const handleSelectedUser = (id: number) => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => { 
        setUserData(data)
        router.push(`/users/user-details`);
      })
      .catch((error: any) => {
        setErrorMessage(error.message)
        console.log("Error fetching user details:", error);
      });
  };

  return (
    <div className="bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px]">
      <h2 className="font-[600] text-[22px] leading-[32px]  text-gray-600 ">
        User List
      </h2>
      {!error ? (
        <>
          <ul className="max-w-full divide-y divide-gray-200">
            {users?.users.map((user) => (
              <UsersDashboard
                key={user.id}
                user={user}
                onClick={() => handleSelectedUser(user.id)}
              />
            ))}
          </ul>
        </>
      ) : (
        <Alert message={errorMessage} type="error" />
      )}
    </div>
  );
};
export default DashboardList;
