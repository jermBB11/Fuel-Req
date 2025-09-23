import { access } from "fs";

const Logout = () => {
  const logout = async () => {
    const token = await localStorage.getItem("token");

    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authurization: "application/json",
      },
    });
  };
};

export default Logout;
