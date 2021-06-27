import { createContext } from "react";

interface IContext {
  isLoggedIn: boolean;
  userId: string | null;
  login: (uid: string, token: string) => void;
  logout: () => void;
  token: string | null;
}

export const AuthContext = createContext<IContext>({
  isLoggedIn: false,
  userId: null,
  login: (uid: string, token: string) => {},
  logout: () => {},
  token: null,
});
