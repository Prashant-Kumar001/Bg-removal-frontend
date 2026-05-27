import { useContext } from "react";
import { UserContext } from "./User.context";

export const useUserContext = () => useContext(UserContext);
