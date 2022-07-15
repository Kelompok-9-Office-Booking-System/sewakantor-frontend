import axios from "axios";

const useFetch = async (endpoint, options, method = "get") => {
  try {
    const { data } = await axios({
      baseURL: "https://sk-api.mbaharip.me/api/v1",
      url: endpoint,
      method: method,
      ...options,
    });
    return data;
  } catch (error) {
    if (error.response.data) throw new Error(error.response.data.message);
    throw new Error(error);
  }
};

export default useFetch;
