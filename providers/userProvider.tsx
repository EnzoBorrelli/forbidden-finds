import { DbUser } from "@/types/dbUser";
import React, { ReactNode } from "react";

interface IuserContext {
  user: DbUser | null;
  setUser: React.Dispatch<React.SetStateAction<DbUser | null>>;
}

const UserContext = React.createContext<IuserContext | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<DbUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IuserContext => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
