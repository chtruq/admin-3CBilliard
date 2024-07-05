export interface AuthUser {
    email: string;
    name: string;
    Phone: string;
    role: string;
    exp: number;
    userid: string;
    
  }
  
  export interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    isLogged: boolean;
    setUser: (user: AuthUser | null) => void;
    setIsLogged: (isLogged: boolean) => void;
 
  }