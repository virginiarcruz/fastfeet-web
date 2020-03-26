export function loginRequest(email, password) {
  return {
    type: '@auth/LOGIN',
    payload: (email, password),
  };
}

export function loginSuccess(token, user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: (token, user),
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}
