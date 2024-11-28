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
export const asyncFetchData = async () => {
  const data = await fetchData();

  return data;
};

// 2)
export const asyncGetUser = async () => {
  const res = await getUser(1);
  const data = await JSON.parse(res);
  return data;
};

// 3)
export const asyncLogin = async () => {
  try {
    await login("admin", "1234");
    const userInfo = await getUserInfo();
    return userInfo;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// 4)
export const asyncGetData = async () => {
  const data = await getData();
  console.log(data);
  return data;
};

// 5)
export const asyncFetchData1 = async () => {
  const data1 = await fetchData1();
  const data2 = await fetchData2();

  console.log(data1);
  console.log(data2);

  return data2;
};

//6) crear una funcion para realizar fetch utilizando async await, debe recibir un string(url) retornar la respuesta o el error

const fetcherFn = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};
