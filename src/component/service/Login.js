import axios from "axios";
axios.defaults.withCredentials = true;
export async function login(loginform) {
  const config = {
    method: "post",
    url: "http://localhost:8080/api/v1/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: loginform,
  };

  try {
    const response = await axios(config, { withCredentials: true });
    const { data, headers } = response;
    console.log(response);
    return {
      error: false,
      body: data,
      cookie: headers["JWT"],
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      body: error.response.data,
    };
  }
}
