const axios = require("axios");

axios.defaults.withCredentials = true;

const config = {
  method: "get",
  url: "http://localhost:8080/api/v1/home",
};
export async function homepage() {
  try {
    const { data } = await axios(config);
    return { error: false, body: data };
  } catch (err) {
    return { error: true };
  }
}
