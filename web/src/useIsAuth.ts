import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ME } from "./features/queries";

const useIsAuth = (userId: string) => {
  // well do the auth later with session storage
  const { loading, data } = useQuery(GET_ME, { variables: { meId: userId } });
  useEffect(() => {
    console.log("checking for the auth user");
    // do the server and then come here
    if (data) {
      console.log(data);
    }
  }, [data]);
  return [data];
};
export default useIsAuth;
