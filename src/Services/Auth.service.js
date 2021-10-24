import HttpService from './Http.service';

const http = new HttpService();

const login = async (data) => {
  const response = await http.post('user/login', data);

  localStorage.setItem('access_token', response.userId);

  return response;
}

const logout = () => {
  localStorage.removeItem('access_token');
}

const isLoggedIn = () => {
  return Boolean(localStorage.getItem('access_token'));
}

export const AuthService = {
  login,
  logout,
  isLoggedIn
};
