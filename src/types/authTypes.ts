export interface AuthUser {
  data: any;
}

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isLogged: boolean;
  setUser: (user: AuthUser | null) => void;
  setIsLogged: (isLogged: boolean) => void;
}
