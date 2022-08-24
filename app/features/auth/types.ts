type Record<K extends keyof any, T> = {
  [P in K]: T;
};

interface UserInfo {
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  photoURL?: string;
  providerId: string;
  tenantId?: string;
  uid: string;
}

interface AdditionUserInfoTypes {
  isNewUser: boolean;
  profile?: Record<string, any>;
  providerId: string;
  username?: string;
}

interface UserMetadata {
  creationTime?: string;
  lastSignInTime?: string;
}

interface User {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  phoneNumber: string | null;
  photoURL: string | null;
  providerData: UserInfo[];
  providerId: string;
  refreshToken?: string;
  tenantId?: string | null;
  uid: string;
}

interface GoogleSignupUser {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}

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
export interface AuthResponsePayload {
  additionalUserInfo?: AdditionUserInfoTypes | undefined;
  user: User;
}

export interface AuthResponseGoogleSignInPayload {
  idToken: string | null;
  scopes?: string[] | undefined;
  serverAuthCode: string | null;
  user: GoogleSignupUser;
}

export interface UserUID {
  uid: string;
}
