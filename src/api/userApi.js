const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fatchUser(){
 const res = await fetch(`${BASE_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}