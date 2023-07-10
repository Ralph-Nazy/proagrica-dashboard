export const getUsers = async (page: number) => {

    const response = await fetch(`https://dummyjson.com/users?limit=5&skip=${(page - 1) * 5}`);
    const userList = await response.json();
    return userList;

}

//Main user list page
export const userList = async (page: number) => {

    const response = await fetch(`https://dummyjson.com/users?limit=20&skip=${(page - 1) * 20}`);
    const userList = await response.json();
    return userList;

}

export const submitAddUser = async (obj:any) => {
    console.log("add user object", obj)
    const result = await fetch('/api/add-user', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    return result.json();
  }