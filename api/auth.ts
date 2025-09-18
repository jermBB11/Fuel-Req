import ky from "ky";


export const fetchUser = async () => {
    const response = await
    ky.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`)
    const data = await response.json();
    console.log(data);
 
 
};
