
const getUser = (url) => fetch(url)
  .then((res) => res.json());

const addUser = (reqBody, reqMethod, url) => fetch(url, {
  method: reqMethod,
  body: JSON.stringify(reqBody),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json());
