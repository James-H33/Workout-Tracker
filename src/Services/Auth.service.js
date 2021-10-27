import HttpService from './Http.service';

const http = new HttpService();

const login = async (data) => {
  try {
    const response = await http.post('user/login', data);

    localStorage.setItem('access_token', response.userId);

    return { success: true, message: response.message }
  } catch (err) {
    if (err && err.message) {
      return { success: false, message: err.message };
    }
    return { success: false, message: 'Something went wrong...' };
  }
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
