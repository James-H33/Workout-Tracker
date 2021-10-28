export default class HttpService {
  constructor() {
    this.base = 'https://jh-workout-tracker.herokuapp.com';
  }

  async get(path) {
    const response = await fetch(`${this.base}/${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
    });

    const result = await response.json();

    return result;
  }

  async post(path, data) {
    const fullPath = `${this.base}/${path}`;
    const response = await fetch(fullPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
      body: JSON.stringify(data)
    });

    if (response.status !== 200) {
      throw await response.json();
    }

    const result = await response.json();

    return result;
  }

  async put(path, data) {
    const fullPath = `${this.base}/${path}`;
    const response = await fetch(fullPath, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
  }

  async delete(path) {
    const response = await fetch(`${this.base}/${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
    });

    const result = await response.json();

    return result;
  }

  getToken() {
    return 'Bearer ' + localStorage.getItem('access_token');
  }
}

