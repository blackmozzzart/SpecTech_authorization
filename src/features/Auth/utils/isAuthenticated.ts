export const AUTH_SESSION_KEY = 'auth_token';

export const isAuthenticated = () => Boolean(window.sessionStorage.getItem(AUTH_SESSION_KEY));
