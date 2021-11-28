
export const getAccessToken = () => {
  const tokenString = window.sessionStorage.getItem('accessToken');
  const userToken = tokenString;
  return userToken;
}

export const existsAccessToken = () => {
  if (localStorage.getItem("accessToken") === null) {
    return false;
  }

  return true;
}

export const getRefreshToken = () => {
  const tokenString = localStorage.getItem('refreshToken');
  const userToken = tokenString;
  return userToken;
}

export const saveAccessToken = (userToken) => {
  window.sessionStorage.setItem('accessToken', userToken);
}

export const saveRefreshToken = (userToken) => {
  localStorage.setItem('refreshToken', userToken);
}