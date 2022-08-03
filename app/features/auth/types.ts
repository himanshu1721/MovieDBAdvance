export interface UserData {
  user: boolean;
  email: string | null;
  userUID: string | null;
  loading: boolean;
  error: boolean;
}

export interface UserCredentials {
  userEmail: string;
  userPassword: string;
}
