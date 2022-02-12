import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import useIsAuth from "../useIsAuth";

type Prop = {
  name?: string;
};
export const Nav: React.FC<Prop> = ({}) => {
  const [userData] = useIsAuth("1");
  const user = useSelector(selectUser);
  useEffect(() => {
    console.log("user", user);
  }, []);
  return (
    <div>
      <h1 className="text-gray-800 text-xl font-semibold">Quotee</h1>
    </div>
  );
};
