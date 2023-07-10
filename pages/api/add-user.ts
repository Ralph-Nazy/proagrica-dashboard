import { NextApiRequest, NextApiResponse } from "next";
import { UserFormData } from "../../types";

//Deafult NextJS sto submit our form data it is also self explainatory

export default async function submitHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  const addUserData: UserFormData = body;

  console.log("userData", addUserData);

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
    return;
  }

  try {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      body: JSON.stringify(addUserData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    res.status(200).json(responseData);
  } catch (error) {
    console.error("An error occurred while submitting the form", error);
    res.status(500).end("An error occurred while submitting the form");
  }
}
