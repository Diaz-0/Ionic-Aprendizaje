import { useContext } from "react";
import { ContextUser } from "../context";

export const useUser = () =>useContext(ContextUser);