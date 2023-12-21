import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

type Token = string;

interface ITokenActions {
  login: () => void;
  logout: () => void;
}

export interface ITokenContextData {
  token: Token;
  tokenActions: ITokenActions;
}

const TokenContext = createContext<ITokenContextData>(null);

export const useTokenContext = () => useContext(TokenContext);

interface ITokenProviderProps {
  children: ReactNode;
}

export const TokenProvider = ({ children }: ITokenProviderProps) => {
  const [token, setToken] = useState<string | undefined>(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const tokenActions: ITokenActions = useMemo(
    () => ({
      login: () => setToken(Math.random().toString(16)),
      logout: () => setToken(null),
    }),
    []
  );

  const tokenContextValue: ITokenContextData = {
    token,
    tokenActions,
  };

  return <TokenContext.Provider value={tokenContextValue}>{children}</TokenContext.Provider>;
};
