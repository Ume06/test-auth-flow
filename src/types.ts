export type authConfig = {
  authRequired: boolean;
  auth0Logout: boolean;
  secret: string;
  baseURL?: string;
  clientID?: string;
}

export interface responseError extends Error {
  status?: number
}