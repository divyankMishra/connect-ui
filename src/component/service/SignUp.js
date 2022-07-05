import axios from "axios";

export async function signup(user) {
  const config = {
    method: "post",
    url: "http://localhost:8080/api/v1/signup",
    headers: {
      "Content-Type": "application/json",
    },
    data: user,
  };

  try {
    const { data } = await axios(config);
    return {
      error: false,
      body: data,
    };
  } catch (error) {
    return {
      error: true,
      body: error.response.data,
    };
  }
}
