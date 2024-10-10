import axios from "axios"

const apiClient = () => {
  return axios.create({
    baseURL: " https://api.rawg.io/api",
    params: {
      key: "0b7c68ef6f5f442bb4c1c702b74eaae3",
    },
  });
}
export default apiClient()