// convertir las siguientes funciones asincronas de .then usando el formato de async await

import {
  fetchData,
  fetchData1,
  fetchData2,
  getData,
  getUser,
  getUserInfo,
  login,
} from "./fetchers.mock";

// 1)
fetchData()
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncFetchData = () => {
  // tu codigo aqui
};

// 2)
getUser(1)
  .then((user) => {
    console.log("Usuario encontrado:", user);
    return JSON.parse(user);
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncGetUser = () => {
  // tu codigo aqui
};

// 3) si las credenciales son incorrectas levantara un error
login("admin", "1234")
  .then((message) => {
    console.log(message);
    return getUserInfo();
  })
  .then((userInfo) => {
    console.log("Información del usuario:", userInfo);
    return userInfo;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncLogin = () => {
  // tu codigo aqui
};

// 4) manejo de errores

getData()
  .then((data) => {
    console.log(data);
    return { data };
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncGetData = () => {
  // tu ccodigo aqui
};

// 5)

fetchData1()
  .then((data1) => {
    console.log(data1);
    return fetchData2();
  })
  .then((data2) => {
    console.log(data2);
    return data2;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncFetchData1 = () => {
  //tu codigo aqui
};

// crear una funcion para realizar fetch utilizando async await, debe recibir un string(url) retornar la respuesta o el error

const fetcherFn = (url) => {
  //tu codigo aqui
};
