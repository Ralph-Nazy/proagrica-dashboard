import React, { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Image from "next/image";
import { BreadCrumb, Loader } from "../../components";

const UserDetails: React.FC<{}> = () => {
  //get user details data from the content API
  const { userData } = useStateContext();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // add a delay of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto">
          <BreadCrumb title={`${userData.firstName} ${userData.lastName}`}/>
          <div className="">
            <div className="grid lg:grid-cols-12 gap-4">
              <div className="lg:col-span-4 bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px] ">
                <div className="flex flex-col text-center">
                  <Image
                    src={userData.image}
                    alt={userData.firstName}
                    width="40"
                    height="40"
                    className="rounded-full mb-2 bg-[#f2f2f2] h-24 w-24 mx-auto"
                  />
                  <h2 className="font-[600] text-[20px] leading-[32px] text-gray-600 ">
                    {userData.firstName} {userData.lastName}
                  </h2>
                  <p className="text-gray-500 font-[400] text-[15px] leading-[28px] mb-5">
                    {userData.company.title}
                  </p>
                </div>
                <dl className="max-w-md divide-y divide-gray-200">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-600 font-[600]">Email</dt>
                    <dd className="text-gray-500 font-[400] text-[15px] leading-[28px]">
                      {userData.email}
                    </dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dd className="mb-1  text-gray-600 font-[600]">Address</dd>
                    <dt className="text-gray-500 text-[15px] leading-[28px]">
                      {userData.address.address}{", "}
                      {userData.address.city}{", "}
                      {userData.address.state}{", "}
                      {userData.address.postalCode}
                    </dt>
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1  text-gray-600 font-[600]">Phone</dt>
                    <dd className="text-gray-500 font-[400] text-[15px] leading-[28px] pb-2">
                      {userData.phone}
                    </dd>
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1  text-gray-600 font-[600]">
                      Date of Birth
                    </dt>
                    <dd className="text-gray-500 font-[400] text-[15px] leading-[28px]">
                      {userData.birthDate}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="lg:col-span-8 bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px]">
                <div className="grid grid-cols-1">
                  <div>
                    <h6 className="mb-2 font-[600] text-[20px] leading-[32px] text-gray-600 ">
                      Company Name
                    </h6>
                    <p className="text-gray-500 font-[400] text-[15px] leading-[28px]  mb-2">
                      {userData.company.name}
                    </p>
                    <h6 className="text-gray-600 font-[600] mb-1">
                      Department
                    </h6>
                    <p className="text-md text-gray-500 font-[400] text-[15px] leading-[28px]  mb-2">
                      {userData.company.department}
                    </p>
                    <h6 className="text-gray-600 font-[600] mb-1">Address</h6>
                    <p className="text-gray-500 font-[400] text-[15px] leading-[28px] ">
                      {userData?.company?.address.address}
                    </p>
                    <p className="text-gray-500 font-[400] text-[15px] leading-[28px] ">
                      {userData?.company?.address.city}
                    </p>
                    <p className="text-gray-500 font-[400] text-[15px] leading-[28px] ">
                      {userData?.company?.address.postalCode}
                    </p>
                    <p className="text-gray-500 font-[400] text-[15px] leading-[28px] ">
                      {userData?.company?.address.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default UserDetails;
