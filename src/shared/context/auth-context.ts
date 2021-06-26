import { createContext } from "react";

interface IContext {
  isLoggedIn: boolean;
  userId: string | null;
  login: (uid: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IContext>({
  isLoggedIn: false,
  userId: null,
  login: (uid: string) => {},
  logout: () => {},
});
