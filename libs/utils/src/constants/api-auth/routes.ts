const enum ENDPOINTS {
  USERS = '/users',
  TOKENS = '/tokens',
  FORGOT = '/forgot',
  VERIFY_USER = '/verify',
  REFRESH_TOKEN = '/refresh',
  WHOAMI = '/whoami',
}

export enum PARAMS {
  USER_ID = 'user_id',
  FORGOT_PASSWORD_TOKEN = 'resetPasswordToken',
  VERIFY_USER_TOKEN = 'verificationToken',
}

export const ROUTES = {
  USERS: ENDPOINTS.USERS,
  VERIFY_USER: `${ENDPOINTS.VERIFY_USER}/:${PARAMS.VERIFY_USER_TOKEN}`,
  TOKENS: ENDPOINTS.TOKENS,
  REQUEST_FORGOT_PASSWORD: ENDPOINTS.FORGOT,
  SET_PASSWORD: `${ENDPOINTS.FORGOT}/:${PARAMS.FORGOT_PASSWORD_TOKEN}`,
  REFRESH_TOKEN: ENDPOINTS.REFRESH_TOKEN,
  WHOAMI: ENDPOINTS.WHOAMI,
};
